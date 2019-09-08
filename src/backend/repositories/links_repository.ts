import { getConnection } from "typeorm";
import { Links } from "../entities/links";

// Cristian Olimpip Fernandes 2016323

export function getLinksRepository() {
  const connection = getConnection();
  const linksRepository = connection.getRepository(Links);
  return linksRepository;
}
