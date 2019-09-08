import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Links } from "./links";
import { User } from "./user";

// Cristian Olimpip Fernandes 2016323

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  public commentId!: number;

  @ManyToOne(type => User, user => user.comment)
  user!: User;

  @Column()
  public comment!: string;
  @ManyToOne(type => Links, links => links.comment)
  links!: Links;
}
