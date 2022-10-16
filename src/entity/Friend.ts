import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

export enum Status {
  PENDING = 0,
  FRIEND = 1,
}

@Entity()
export class Friend extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  requestorId: string;

  @Column()
  addresseeId: string;

  @Column({
    type: "enum",
    enum: Status,
  })
  status: number;

  @ManyToOne(() => User, (user) => user.friends)
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
