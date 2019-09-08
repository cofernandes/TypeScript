import { getConnection } from "typeorm";
import { Comment } from "./../entities/comment";

// Cristian Olimpip Fernandes 2016323

export function getCommentRepository() {
  const connection = getConnection();
  const commentRepository = connection.getRepository(Comment);
  return commentRepository;
}
