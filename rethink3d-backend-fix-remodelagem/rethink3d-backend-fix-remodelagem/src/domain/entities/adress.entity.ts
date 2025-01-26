import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('adress')
export class Adress {
  @OneToOne(() => User, (user) => user.adress, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'users_id' })
  user: User;

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  street: string;

  @Column({ nullable: false })
  number: number;

  @Column({ nullable: false })
  neighbourhood: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  state: string;
}
