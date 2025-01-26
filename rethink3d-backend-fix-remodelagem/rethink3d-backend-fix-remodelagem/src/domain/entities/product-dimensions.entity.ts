import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity('product_dimensions')
export class ProductDimensions{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false})
  width: number;

  @Column({nullable:false})
  heigth: number;

  @Column({nullable:false})
  depht: number;

  @OneToMany(() => Product, (product) => product.productDimensions, {cascade:true})
  products: Product[]
}