import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default () => {
  return {
    type: 'postgres',
    host: process.env.HOST, // 127.0.0.1 ou localhost
    port: Number(process.env.DB_PORT), // Port
    username: process.env.DB_USERNAME, // Usernamename cadastrado
    password: process.env.DB_PASSWORD, // Senha pessoal de acesso
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity.js'], // Suas entidades
    synchronize: true, // Sincroniza o schema (desabilitar em produção)
    logging: true,
  } as TypeOrmModuleOptions;
};
