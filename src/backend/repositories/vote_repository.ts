import { getConnection } from "typeorm";
import { Vote } from "../entities/vote";

// Cristian Olimpip Fernandes 2016323

export function getVoteRepository() {
  const connection = getConnection();
  const voteRepository = connection.getRepository(Vote);
  return voteRepository;
}
