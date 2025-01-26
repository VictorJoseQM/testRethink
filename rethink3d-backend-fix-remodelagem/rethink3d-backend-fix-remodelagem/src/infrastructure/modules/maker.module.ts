import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maker } from '../../domain/entities/maker.entity';
import { MakersController } from '../controllers/makers.controller';
import { MakerService } from '../services/maker.service';
import { User } from 'src/domain/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Maker, User])], // Registra a entidade no módulo
  controllers: [MakersController], // Registra o controlador
  providers: [MakerService], // Registra o serviço
  exports: [MakerService], // Exporta o serviço, caso outros módulos precisem
})
export class MakerModule {}
