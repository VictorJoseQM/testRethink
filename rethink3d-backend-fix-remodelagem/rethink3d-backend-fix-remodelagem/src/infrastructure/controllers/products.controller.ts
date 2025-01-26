import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Product } from 'src/domain/entities/product.entity';
import { CreateProductDTO } from 'src/application/dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get('buscar')
  async buscar(
    @Query('id') id?: number,
    @Query('nome') nome?: string,
  ): Promise<Product[]> {
    try {
      return this.productsService.buscar(id, nome);
    } catch (error) {
      throw new HttpException(
        `Erro ao buscar produtos: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Product> {
    try {
      return await this.productsService.findOne(id);
    } catch (error) {
      throw new HttpException(
        `Product com id ${id} não encontrado: ${error.message}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  /**
   * Cria um novo produto.
   * @param createProductDto - Dados do produto a ser criado
   */
  @Post()
  async create(@Body() createProductDto: CreateProductDTO): Promise<Product> {
    return this.productsService.create();
  }

  @Get('imagens/:id')
  async getAllPictures(@Param('id') id: string): Promise<string[]> {
    return this.productsService.getAllPictures(id);
  }

  // @Post('upload-pictures/:id')
  // @UseInterceptors(FilesInterceptor('file'))
  // async uploadPicture(
  //   @UploadedFiles(
  //     new ParseFilePipeBuilder()
  //       .addFileTypeValidator({ fileType: /jpeg|jpg|png/g })
  //       .addMaxSizeValidator({ maxSize: 10 * (1024 * 1024) })
  //       .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
  //   )
  //   files: Array<Express.Multer.File>,
  //   @Param('id') id: number,
  // ) {
  //   const urls = await this.productsService.uploadPictures(id, files);
  //   return { message: 'Imagens salvas com sucesso', urls };
  // }

  /**
   * Atualiza os dados de um produto.
   * @param id - ID do produto a ser atualizado
   * @param updateProductDto - Dados para atualização
   */
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateProductDto: CreateProductDTO,
  ): Promise<Product> {
    try {
      return await this.productsService.update(id, updateProductDto);
    } catch (error) {
      throw new HttpException(
        `Erro ao atualizar o produto: ${error.message}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  /**
   * Remove um produto pelo ID.
   * @param id - ID do produto a ser removido
   */
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    try {
      await this.productsService.delete(id);
    } catch (error) {
      throw new HttpException(
        `Erro ao remover o produto: ${error.message}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  // @Get('homepage')
  // async findAllBasic(): Promise<
  //   { nome: string; preco: number; fotoCapa: string | null }[]
  // > {
  //   return this.productsService.findAllProductsHomepage();
  // }
}
