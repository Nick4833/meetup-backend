import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UserToMeetup } from "./UserToMeetup";

export enum Type {
  PUBLIC = 0,
  FRIEND = 1,
}

@Entity()
export class Meetup extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @Column({ nullable: true })
  twitterUrl: string;

  @Column({ nullable: true })
  facebookUrl: string;

  @Column()
  locationLat: number;

  @Column()
  locationLng: number;

  @Column()
  time: Date;

  @Column({
    type: "enum",
    enum: Type,
  })
  type: number;

  @OneToMany(() => UserToMeetup, (userToMeetup) => userToMeetup.meetup)
  userToMeetups: UserToMeetup[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
