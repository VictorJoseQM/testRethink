import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants';
import { AuthService } from '../services/auth.service';
import { AuthController } from '../controllers/auth.controller';
import { UserModule } from './user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthData } from 'src/domain/entities/auth-data.entity';
import { User } from 'src/domain/entities/user.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([AuthData, User]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
