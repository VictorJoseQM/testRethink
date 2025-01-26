import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../../domain/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // Registra a entidade no módulo
  controllers: [], // Registra o controlador
  providers: [], // Registra o serviço
  exports: [], // Exporta o serviço, caso outros módulos precisem
})
export class ProductModule {}
