import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  BaseEntity,
} from "typeorm";
import { Friend } from "./Friend";
import { Interest } from "./Interest";
import { Task } from "./Task";
import { UserToMeetup } from "./UserToMeetup";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  profileUrl: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  gender: string;

  @Column()
  dob: Date;

  @Column()
  age: number;

  @OneToMany(() => UserToMeetup, (userToMeetup) => userToMeetup.user)
  userToMeetups: UserToMeetup[];

  @OneToMany(() => Friend, (friend) => friend.user)
  friends: Friend[];

  @ManyToMany(() => Interest, (interest) => interest.users)
  interests: Interest[];

  @ManyToMany(() => Task, (task) => task.users)
  tasks: Task[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
