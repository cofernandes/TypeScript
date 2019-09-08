import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable
} from "typeorm";
import { Links } from "./links";
import { Comment } from "./comment";
import { Vote } from "./vote";

// Cristian Olimpip Fernandes 2016323

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;
  @Column()
  public email!: string;
  @Column()
  public password!: string;
  @OneToMany(type => Links, links => links.user)
  @JoinTable()
  links!: Links[];

  @OneToMany(type => Comment, comment => comment.user)
  @JoinTable()
  comment!: Comment[];

  @OneToMany(type => Vote, vote => vote.user)
  @JoinTable()
  vote!: Vote[];
  userId: any;
}
