import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Group } from "./Group";
import { User } from "./User";

export enum Status {
  PENDING = 0,
  DONE = 1,
}

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: "enum",
    enum: Status,
  })
  status: number;

  @ManyToOne(() => Group, (group) => group.tasks)
  group: Group;

  @ManyToMany(() => User, (user) => user.tasks)
  @JoinTable({ name: "user_to_task" })
  users: User[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
