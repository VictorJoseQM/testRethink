import {
  BadGatewayException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from './user.service';
import { AuthData } from 'src/domain/entities/auth-data.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/domain/entities/user.entity';
import { CreateUserDTO } from 'src/application/dto/create-user.dto';
import { request, response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthData)
    private readonly authDataRepository: Repository<AuthData>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly entityManager: EntityManager,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDTO: any) {
    const saltRounds = 10;

    try {
      return await this.entityManager.transaction(async (manager) => {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(signUpDTO.password, salt);

        const user = await manager.save(User, { ...signUpDTO.user });

        await manager.save(AuthData, {
          ...signUpDTO,
          password: hash,
          user,
        });

        return response.status(201);
      });
    } catch {
      throw new BadGatewayException();
    }
  }

  async signIn(email: string, pass: string): Promise<any> {
    if (!email || !pass) {
      // TODO: Nova exception
      throw new UnauthorizedException();
    }

    const authData = await this.authDataRepository.findOne({
      where: { email },
    });

    const authorized = await bcrypt.compare(pass, authData.password);
    if (!authorized) throw new UnauthorizedException();

    const user = await this.userService.findById(authData.user.id);

    if (!user) {
      // TODO: Nova exception
      throw new UnauthorizedException();
    }

    // Dados que irão para o token
    const payload = {
      sub: user.id,
      email: authData.email,
      name: user.name,
    };

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
