import { createConnection } from "typeorm";

import { User } from "./backend/entities/user";
import { Links } from "./backend/entities/links";
import { Vote } from "./backend/entities/vote";
import { Comment } from "./backend/entities/comment";

// Cristian Olimpip Fernandes 2016323

export async function createDbConnection() {
  const DATABASE_HOST = process.env.DATABASE_HOST;
  const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
  const DATABASE_USER = process.env.DATABASE_USER;
  const DATABASE_DB = process.env.DATABASE_DB;

  console.log(`
            host: ${DATABASE_HOST}
            password: ${DATABASE_PASSWORD}
            user: ${DATABASE_USER}
            db: ${DATABASE_DB}
        `);

  await createConnection({
    type: "postgres",
    host: DATABASE_HOST,
    port: 5432,
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_DB,

    entities: [User, Links, Vote, Comment],
    synchronize: true
  });
}
