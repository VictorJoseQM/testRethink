import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../domain/entities/user.entity';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Registra a entidade no módulo
  controllers: [UserController], // Registra o controlador
  providers: [UserService], // Registra o serviço
  exports: [UserService], // Exporta o serviço, caso outros módulos precisem
})
export class UserModule {}
