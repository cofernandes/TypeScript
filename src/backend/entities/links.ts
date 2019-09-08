import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinTable
} from "typeorm";
import { User } from "./user";
import { Comment } from "./comment";
import { Vote } from "./vote";

// Cristian Olimpip Fernandes 2016323

@Entity()
export class Links {
  @PrimaryGeneratedColumn()
  public id!: number;
  @Column()
  public Url!: string;
  @Column()
  public title!: string;
  @ManyToOne(type => User, user => user.links)
  user!: User;
  @OneToMany(type => Comment, comment => comment.links)
  @JoinTable()
  comment!: Comment[];

  @OneToMany(type => Vote, vote => vote.links)
  @JoinTable()
  vote!: Vote[];
}
