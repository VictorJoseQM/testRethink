import { Injectable, NotFoundException, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Maker } from 'src/domain/entities/maker.entity';
import { CreateUserMakerDTO } from 'src/application/dto/create-user-maker.dto';
import { User } from 'src/domain/entities/user.entity';

@Injectable()
export class MakerService {
  constructor(
    @InjectRepository(Maker)
    private readonly makerRepository: Repository<Maker>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async findAll(): Promise<Maker[]> {
    return await this.makerRepository.find({ relations: ['products'] });
  }

  async findOne(id: number): Promise<Maker> {
    const maker = await this.makerRepository.findOne({
      where: { id },
      relations: ['produtos'],
    });
    if (!maker) {
      throw new NotFoundException(`Maker com id ${id} não encontrado`);
    }
    return maker;
  }

  /**
   * Cria um novo maker.
   * @param makerDto - Dados do maker
   */
  async create(createMakerDTO: CreateUserMakerDTO): Promise<void> {
    const {
      name,
      lastName,
      identification,
      identificationType,
      phone,
      status,
      services,
      nameMaker,
      description,
      rating,
      statusMaker,
    } = createMakerDTO;

    //Criando usuário geral no sistema
    const user = this.userRepository.create({
      name,
      lastName,
      identification,
      identificationType,
      phone,
      status,
    });
    const savedUser = await this.userRepository.save(user);
    const maker = this.makerRepository.create({
      services,
      name: nameMaker,
      description,
      rating,
      status: statusMaker,
      user: savedUser, // associa ao usuário geral recém-criado
    });
    await this.makerRepository.save(maker);
  }
  /**
   * Atualiza os dados de um maker.
   * @param idMaker - ID do maker
   * @param makerDto - Dados para atualização
   */
  async update(): Promise<Maker> {
    throw new HttpException('Not implemented.', 500);
  }

  /**
   * Remove um maker pelo ID.
   * @param id - ID do maker a ser removido
   */
  async delete(id: number): Promise<void> {
    const maker = await this.makerRepository.findOne({
      where: { id },
    });
    if (!maker) {
      throw new NotFoundException(`Maker com id ${id} não encontrado`);
    }
    await this.makerRepository.remove(maker);
  }

  // async getAvatar(idMaker: number): Promise<{ avatar: string }> {
  //   const makerFolderPath = path.resolve(
  //     process.cwd(),
  //     'imagens',
  //     'makers',
  //     `${idMaker}`,
  //   );
  //   const possibleExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  //   let avatarUrl = null;

  //   try {
  //     await fs.access(makerFolderPath);
  //     const files = await fs.readdir(makerFolderPath);

  //     for (const ext of possibleExtensions) {
  //       if (files.includes(`avatar${ext}`)) {
  //         avatarUrl = `/imagens/makers/${idMaker}/avatar${ext}`;
  //         break;
  //       }
  //     }

  //     if (!avatarUrl) {
  //       throw new NotFoundException(
  //         `Avatar não encontrado para Maker ID: ${idMaker}`,
  //       );
  //     }

  //     return { avatar: avatarUrl };
  //   } catch (error) {
  //     if (error.code === 'ENOENT') {
  //       throw new NotFoundException(
  //         `Pasta do Maker não encontrada: ${idMaker}`,
  //       );
  //     }
  //     throw new HttpException(
  //       'Erro ao recuperar o avatar.',
  //       HttpStatus.INTERNAL_SERVER_ERROR,
  //     );
  //   }
  // }

  // async uploadAvatar(idMaker: number, file: Express.Multer.File) {
  //   const makerFolderPath = path.resolve(
  //     process.cwd(),
  //     'imagens',
  //     'makers',
  //     `${idMaker}`,
  //   );
  //   await fs.mkdir(makerFolderPath, { recursive: true });

  //   const fileExtension = path.extname(file.originalname).toLowerCase();
  //   const fileName = `avatar${fileExtension}`;
  //   const filePath = path.resolve(makerFolderPath, fileName);

  //   await fs.writeFile(filePath, file.buffer);

  //   const imageUrl = `/imagens/makers/${idMaker}/${fileName}`;
  //   await this.addAvatarToMaker(idMaker, imageUrl);

  //   return { message: 'Avatar atualizado com sucesso!', avatar: imageUrl };
  // }

  // async addAvatarToMaker(idMaker: number, avatarUrl: string): Promise<Maker> {
  //   const maker = await this.findOne(idMaker);
  //   maker.avatar = avatarUrl;
  //   return this.makerRepository.save(maker);
  // }
}
