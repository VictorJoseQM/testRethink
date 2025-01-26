import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('auth_data')
export class AuthData {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, { nullable: false, eager: true })
  @JoinColumn({ name: 'users_id' })
  user: User;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;
}
