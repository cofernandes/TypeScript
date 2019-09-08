import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user";
import { Links } from "./links";

// Cristian Olimpip Fernandes 2016323

@Entity()
export class Vote {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public vote!: boolean;

  @ManyToOne(type => User, user => user.vote)
  user!: User;

  @ManyToOne(type => Links, links => links.vote)
  links!: Links;
}
