import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './infrastructure/modules/user.module';
import { ProductModule } from './infrastructure/modules/product.module';
import { MakerModule } from './infrastructure/modules/maker.module';
import { ConfigModule } from '@nestjs/config';
import postgresConfig from './infrastructure/config/postgres.config';
import { AuthModule } from './infrastructure/modules/auth.module';
import * as Joi from 'joi';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),
      }),
    }),
    TypeOrmModule.forRoot(postgresConfig()),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'imagens'),
      serveRoot: '/imagens',
    }),
    AuthModule,
    UserModule,
    MakerModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
