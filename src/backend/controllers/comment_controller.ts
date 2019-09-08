import * as express from "express";
import * as joi from "joi";
import { getLinksRepository } from "../repositories/links_repository";
import { authMiddleware } from "../middleware/middleware";
import { getVoteRepository } from "../repositories/vote_repository";
import { getUserRepository } from "../repositories/user_repository";
import { getCommentRepository } from "../repositories/comment_repository";

// Cristian Olimpip Fernandes 2016323

export function getCommentController() {
  // Create respository so we can perform database operations
  const commentRepository = getCommentRepository();
  const voteRepository = getVoteRepository();
  const userRepository = getUserRepository();

  // Create router instance so we can declare enpoints
  const router = express.Router();

  // Declare Joi Schema so we can validate links
  const commentSchemaForPost = {
    UserID: joi.number(),
    Url: joi.string(),
    title: joi.string()
  };

  // HTTP GET http://localhost:8080/links/
  router.get("/", (req, res) => {
    (async () => {
      const comment = await commentRepository.find();
      res.json(comment);
    })();
  });

  // HTTP DELETE http://localhost:8080/api/v1/comment/:id
  router.delete("/:id", authMiddleware, (req, res) => {
    (async () => {
      const UserID = (req as any).userId;
      const id = req.params.id;
      const checkComment = await commentRepository.findOne(id);
      if (checkComment) {
        if (checkComment.user.userId == UserID) {
          const comment = await commentRepository.delete(id);
          res.json(comment);
        } else {
          res
            .status(403)
            .send({ msg: "User doesn't have permition for this operation" });
        }
      } else {
        res.status(404).send({ msg: "it was  not found the lindID!" });
      }
    })();
  });

  // HTTP CREATE A NEW COMMENT http://localhost:8080/api/v1/comment
  router.post("/", (req, res) => {
    (async () => {
      const newComment = req.body;
      const result = joi.validate(req.body, commentSchemaForPost);
      if (result.error) {
        res.status(400).send({ msg: "Link is not valid!" });
      } else {
        const links = await commentRepository.save(newComment);
        res.json(links);
      }
    })();
  });

  return router;
}
