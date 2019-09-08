import { getConnection } from "typeorm";
import { User } from "../entities/user";

// Cristian Olimpip Fernandes 2016323

export function getUserRepository() {
  const connection = getConnection();
  const userRepository = connection.getRepository(User);
  return userRepository;
}
