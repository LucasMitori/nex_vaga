import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { IsNotEmpty } from "class-validator";
import { User } from "./user.entity";

@Entity("transactions")
export class Transaction {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @IsNotEmpty()
  cpf: string;

  @Column()
  @IsNotEmpty()
  description: string;

  @Column()
  @IsNotEmpty()
  transactionDate: Date;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  @IsNotEmpty()
  points: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  @IsNotEmpty()
  amount: number;

  @Column()
  @IsNotEmpty()
  status: string;

  @ManyToOne(() => User, (user) => user.transactions)
  @JoinColumn({ name: "userId" })
  user: User;

  @CreateDateColumn()
  createdAt: Date;
}
