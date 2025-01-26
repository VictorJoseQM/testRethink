import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Maker } from './maker.entity';
import { Image } from './image.entity';
import { ProductDimensions } from './product-dimensions.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Maker, (maker) => maker.products, { nullable: false })
  @JoinColumn({ name: 'makers_id' })
  maker: Maker;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;

  @ManyToOne(
    () => ProductDimensions,
    (productDimensions) => productDimensions.products,
    { nullable: false },
  )
  @JoinColumn({ name: 'product_dimensions_id' })
  productDimensions: ProductDimensions;

  @ManyToMany(() => Image)
  @JoinTable()
  image: Image[];

  @Column()
  price: number;

  @Column()
  weight: number;

  @Column()
  material: string;

  @Column({ nullable: false })
  status: boolean;
}
