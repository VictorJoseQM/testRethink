import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpException,
  HttpStatus,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDTO } from 'src/application/dto/create-user.dto';
import { User } from 'src/domain/entities/user.entity';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(@Request() req): Promise<User[]> {
    console.log(req['user']);
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    try {
      return await this.userService.findById(id);
    } catch (error) {
      throw new HttpException(
        `Usuário com id ${id} não encontrado ${error}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  /**
   * Cria um novo usuário.
   * @param createUsuarioDto - Dados do usuário a ser criado
   */
  @Post()
  async create(@Body() user: CreateUserDTO): Promise<User> {
    console.log(user);
    return this.userService.create(user);
  }

  /**
   * Atualiza os dados de um usuário.
   * @param id - ID do usuário a ser atualizado
   * @param updateUsuarioDto - Dados para atualização
   */
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateUsuarioDto: CreateUserDTO,
  ): Promise<User> {
    try {
      return await this.userService.update(id, updateUsuarioDto);
    } catch (error) {
      throw new HttpException(
        `Erro ao atualizar o usuário: ${error.message}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  /**
   * Remove um usuário pelo ID.
   * @param id - ID do usuário a ser removido
   */
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    try {
      await this.userService.delete(id);
    } catch (error) {
      throw new HttpException(
        `Erro ao remover o usuário: ${error.message}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
