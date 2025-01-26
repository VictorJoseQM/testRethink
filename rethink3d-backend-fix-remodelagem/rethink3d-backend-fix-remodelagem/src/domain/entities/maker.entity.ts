import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from './user.entity';
import { Product } from './product.entity';
import { Category } from './category.entity';
import { Image } from './image.entity';
import { MakerServices } from './enum/maker-services.enum';

@Entity('makers')
export class Maker {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.maker, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'users_id' })
  user: User;

  @OneToOne(() => Image, { nullable: false })
  image: Image;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;

  @Column({nullable:false})
  rating: number;

  @ManyToMany(() => Category)
  @JoinTable()
  categorias: Category[];

  @Column({
    type: 'enum',
    enum: MakerServices,
    default: MakerServices.NONE,
    nullable: false,
  })
  services: MakerServices;

  @Column({
    name: 'creation_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  creationTime: Date;

  @OneToMany(() => Product, (product) => product.maker, { cascade: true })
  products: Product[];

  @Column({ nullable: false, default: true })
  status: boolean;
}
