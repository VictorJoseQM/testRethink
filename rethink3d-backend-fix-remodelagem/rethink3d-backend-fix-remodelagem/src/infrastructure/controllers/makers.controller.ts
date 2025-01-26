import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { MakerService } from '../services/maker.service';
import { Maker } from 'src/domain/entities/maker.entity';
import { CreateUserMakerDTO } from 'src/application/dto/create-user-maker.dto';

@Controller('makers')
export class MakersController {
  constructor(private readonly makerService: MakerService) {}

  /**
   * Retorna todos os makers.
   */
  @Get()
  async findAll(): Promise<Maker[]> {
    return await this.makerService.findAll();
  }

  /**
   * Busca um maker por ID.
   * @param idMaker - ID do maker
   */
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) idMaker: number): Promise<Maker> {
    return await this.makerService.findOne(idMaker);
  }

  @Post()
  async createMaker(
    @Body() createUserMakerDTO: CreateUserMakerDTO,
  ): Promise<void> {
    return this.makerService.create(createUserMakerDTO);
  }

  /**
   * Remove um maker pelo ID.
   * @param idMaker - ID do maker
   */
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) idMaker: number): Promise<void> {
    return await this.makerService.delete(idMaker);
  }

  // @Get(':id/personalizado')
  // async getMakerPersonalizado(
  //   @Param('id') id: number,
  // ): Promise<CreateMakerPersonalizadoDTO> {
  //   return await this.makerService.findMakerPersonalizado(id);
  // }

  /**
   * Cria um novo maker.
   * @param makerDto - Dados do maker
   */
  // @Post()
  // async create(@Body() makerDto: CreateMakerDTO): Promise<Maker> {
  //   return await this.makerService.create();
  // }

  /**
   * Atualiza um maker existente.
   * @param idMaker - ID do maker
   * @param makerDto - Dados do maker
   */
  // @Put(':id')
  // async update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() makerDto: CreateMakerDTO,
  // ): Promise<Maker> {
  //   return await this.makerService.update();
  // }

  // @Get('avatar/:idMaker')
  // async getAvatar(@Param('idMaker', ParseIntPipe) idMaker: number) {
  //   return this.makerService.getAvatar(idMaker);
  // }

  // @Post('upload-avatar/:idMaker')
  // @UseInterceptors(FileInterceptor('file'))
  // async uploadAvatar(
  //   @UploadedFile() file: Express.Multer.File,
  //   @Param('idMaker', ParseIntPipe) idMaker: number,
  // ) {
  //   if (!file) {
  //     throw new BadRequestException('Arquivo não enviado');
  //   }
  //   return this.makerService.uploadAvatar(idMaker, file);
  // }
}
