import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/domain/entities/product.entity';
import { CreateProductDTO } from 'src/application/dto/create-product.dto';
import * as path from 'path';
import * as fs from 'fs/promises';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly product: Repository<Product>,
  ) {}

  async create(): Promise<Product> {
    const novoProduct = this.product.create();
    return this.product.save(novoProduct);
  }

  async delete(id: number): Promise<void> {
    const result = await this.product.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Product com id ${id} não encontrado`);
    }
  }

  async update(
    id: number,
    updateProductDTO: CreateProductDTO,
  ): Promise<Product> {
    const produto = await this.product.preload({
      id,
      ...updateProductDTO,
    });
    if (!produto) {
      throw new NotFoundException(`Product com id ${id} não encontrado`);
    }

    return this.product.save(produto);
  }

  async findAll(): Promise<Product[]> {
    return this.product.find();
  }

  async findOne(id: number): Promise<Product> {
    const produto = await this.product.findOne({
      where: { id },
    });
    if (!produto) {
      throw new NotFoundException(`Product com id ${id} não encontrado`);
    }
    return produto;
  }

  async buscar(id?: number, nome?: string): Promise<Product[]> {
    if (id) {
      // Busca por ID
      const produto = await this.findOne(id);
      return produto ? [produto] : [];
    }
    if (nome) {
      // Busca por nome ou parte do nome
      return this.product
        .createQueryBuilder('produto')
        .where('produto.nome ILIKE :nome', { nome: `%${nome}%` })
        .getMany();
    }

    throw new NotFoundException('Nenhum parâmetro de busca foi fornecido.');
  }

  // async addImagesToProduct(id: number, urls: string[]): Promise<Product> {
  //   const produto = await this.findOne(id);

  //   if (!produto) {
  //     throw new NotFoundException(`Product com id ${id} não encontrado`);
  //   }

  //   produto.imagens = [...(produto.imagens || []), ...urls];

  //   return this.product.save(produto);
  // }

  // async findAllProductsHomepage(): Promise<
  //   { nome: string; preco: number; fotoCapa: string | null }[]
  // > {
  //   const produtos = await this.product.find({
  //     select: ['nome', 'preco', 'imagens'],
  //   });

  //   return produtos.map((produto) => ({
  //     nome: produto.nome,
  //     preco: produto.preco,
  //     fotoCapa: produto.imagens?.length ? produto.imagens[0] : null, // Primeira imagem como capa
  //   }));
  // }

  // async uploadPictures(
  //   id: number,
  //   files: Array<Express.Multer.File>,
  // ): Promise<string[]> {
  //   const result: string[] = [];
  //   const productFolderPath = path.resolve(
  //     process.cwd(),
  //     'imagens',
  //     'produtos',
  //     `${id}`,
  //   );
  //   const baseUrl = `imagens/produtos/${id}`; // Ajuste conforme necessário

  //   await fs.mkdir(productFolderPath, { recursive: true });

  //   let counter = 0;
  //   for (const file of files) {
  //     if (file.size < 1024) {
  //       throw new BadRequestException('Arquivo muito pequeno');
  //     }

  //     const fileExtension = path
  //       .extname(file.originalname)
  //       .toLowerCase()
  //       .substring(1);
  //     const fileName = `${counter}.${fileExtension}`;
  //     counter++;

  //     const fileFullPath = path.resolve(productFolderPath, fileName);
  //     const fileUrl = `${baseUrl}/${fileName}`;

  //     result.push(fileUrl);
  //     await fs.writeFile(fileFullPath, file.buffer); // Salva o arquivo
  //   }

  //   // Atualiza a entidade Product
  //   const produto = await this.findOne(id);
  //   if (!produto) {
  //     throw new NotFoundException('Product não encontrado');
  //   }

  //   produto.imagens = [...(produto.imagens || []), ...result];
  //   await this.product.save(produto);

  //   return result;
  // }

  async getAllPictures(id: string): Promise<string[]> {
    const productFolderPath = path.resolve(
      process.cwd(),
      'imagens',
      'produtos',
      id,
    );

    try {
      await fs.access(productFolderPath); // Verifica se a pasta existe
      return await fs.readdir(productFolderPath); // Lê os arquivos da pasta
    } catch (error) {
      if (error.code === 'ENOENT') {
        throw new NotFoundException(`Pasta do produto não encontrada: ${id}`);
      }
      throw new BadRequestException('Erro ao recuperar imagens do produto.');
    }
  }
}
