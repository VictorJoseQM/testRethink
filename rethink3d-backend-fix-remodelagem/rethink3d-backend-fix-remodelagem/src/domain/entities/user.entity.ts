import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Image } from './image.entity';
import { Maker } from './maker.entity';
import { Adress } from './adress.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Image)
  @JoinColumn()
  image: Image;

  @Column({ nullable: false })
  name: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ unique: true, nullable: false })
  identification: string;

  @Column({ name: 'identification_type', nullable: false })
  identificationType: string;

  @Column({ nullable: true })
  phone: string;

  @OneToOne(() => Maker, (maker) => maker.user, { onDelete: 'CASCADE' })
  maker: Maker;

  @Column({
    name: 'creation_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  creationTime: Date;

  @Column({ nullable: false, default: true })
  status: boolean;

  @OneToOne(() => Adress, (adress) => adress.user)
  adress: Adress;
}
