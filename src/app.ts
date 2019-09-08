import { createDbConnection } from "./db";
import express from "express";
import bodyParser from "body-parser";
import { getUserController } from "./backend/controllers/user_controler";
import { getLinksController } from "./backend/controllers/link_controller";
import { getAuthController } from "./backend/controllers/auth_controller";
import { getCommentController } from "./backend/controllers/comment_controller";

// Cristian Olimpip Fernandes 2016323

(async () => {
  await createDbConnection();

  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    res.send("This is the home page!");
  });

  const usersController = getUserController();
  app.use("/api/v1/users", usersController);

  const linksController = getLinksController();
  app.use("/api/v1/links", linksController);

  const authController = getAuthController();
  app.use("/api/v1/auth", authController);

  const commentController = getCommentController();
  app.use("/api/v1/comment", commentController);

  app.listen(8080, () => {
    console.log("The server is running in port 8080!");
  });
})();
