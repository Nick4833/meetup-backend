import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Meetup } from "./Meetup";
import { User } from "./User";

export enum Role {
  HOST = 0,
  ATTENDEE = 1,
}

@Entity()
export class UserToMeetup extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  userId: string;

  @Column()
  meetupId: string;

  @Column({
    type: "enum",
    enum: Role,
  })
  role: number;

  @ManyToOne(() => User, (user) => user.userToMeetups)
  user: User;

  @ManyToOne(() => Meetup, (meetup) => meetup.userToMeetups)
  meetup: Meetup;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
