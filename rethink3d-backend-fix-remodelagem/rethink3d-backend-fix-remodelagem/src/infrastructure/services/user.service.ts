import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/domain/entities/user.entity';
import { CreateUserDTO } from 'src/application/dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(user: CreateUserDTO): Promise<User> {
    try {
      const createdUser = await this.userRepository.save(
        await this.userRepository.create(user),
      );
      return createdUser;
    } catch {
      throw new HttpException('Impossível cadastrar', 500);
    }
  }

  async delete(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Usuário com id ${id} não encontrado`);
    }
  }

  async update(id: number, updateUsuarioDto: CreateUserDTO): Promise<User> {
    const usuario = await this.userRepository.preload({
      id,
      ...updateUsuarioDto,
    });

    if (!usuario) {
      throw new NotFoundException(`Usuário com id ${id} não encontrado`);
    }

    return this.userRepository.save(usuario);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(id: number): Promise<User> {
    const usuario = await this.userRepository.findOne({
      where: { id },
    });
    if (!usuario) {
      throw new NotFoundException(`Usuário com id '${id}' não encontrado`);
    }
    return usuario;
  }
}
