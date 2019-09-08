import * as express from "express";
import * as joi from "joi";
import { getLinksRepository } from "../repositories/links_repository";
import { authMiddleware } from "../middleware/middleware";
import { getVoteRepository } from "../repositories/vote_repository";
import { getUserRepository } from "../repositories/user_repository";
import { AdvancedConsoleLogger } from "typeorm";

// Cristian Olimpip Fernandes 2016323

export function getLinksController() {
  // Create respository so we can perform database operations
  const linksRepository = getLinksRepository();
  const voteRepository = getVoteRepository();
  const userRepository = getUserRepository();

  // Create router instance so we can declare enpoints
  const router = express.Router();

  // Declare Joi Schema so we can validate links
  const linksSchemaForPost = {
    //UserID: joi.number(),
    Url: joi.string(),
    title: joi.string()
  };

  // HTTP GET http://localhost:8080/api/v1/links
  router.get("/", (req, res) => {
    (async () => {
      const links = await linksRepository.find();
      res.json(links);
    })();
  });

  // HTTP GET http://localhost:8080/api/v1/links/:id
  router.get("/:id", (req, res) => {
    (async () => {
      const id = req.params.id;
      const links = await linksRepository.findOne(id);
      res.json(links);
    })();
  });

  // HTTP DELETE http://localhost:8080/api/v1/links/:id
  router.delete("/:id", authMiddleware, (req, res) => {
    (async () => {
      const UserID = (req as any).userId;
      const id = req.params.id;
      const checklinks = await linksRepository.findOne({
        where: { user: { id: UserID }, id: id }
      });
      if (checklinks) {
        if (checklinks.user.id == UserID) {
          const links = await linksRepository.delete(id);
          res.json(links);
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

  // HTTP CREATE A LINK http://localhost:8080/links/
  router.post("/", authMiddleware, (req, res) => {
    (async () => {
      const UserID = (req as any).userId;
      const thisUser = await userRepository.findOne(UserID);
      const newLinks = req.body;
      const result = joi.validate(req.body, linksSchemaForPost);
      if (result.error) {
        res.status(400).send({ msg: "Link is not valid!" });
      } else {
        const thisLinks = { ...newLinks, user: thisUser };
        const links = await linksRepository.save(thisLinks);
        res.json(links);
      }
    })();
  });

  // HTTP UP Vote http://localhost:8080/api/v1/links/upvote
  router.post("/:id/upvote", authMiddleware, (req, res) => {
    (async () => {
      const UserID = (req as any).userId;
      const thisUser = await userRepository.findOne(UserID);

      const id = req.params.id;
      const checklinks = await linksRepository.findOne(id);

      if (checklinks) {
        const voted = await voteRepository.find({
          links: checklinks,
          user: thisUser
        });

        if (voted) {
          const govote = { vote: true, user: thisUser, link: checklinks };
          const vote = await voteRepository.save(govote);
          res.json(vote);
        } else {
          res.status(400).send({
            msg: "User already voted!"
          });
        }
      } else {
        res.status(404).send({ msg: "it was  not found the lindID!" });
      }
    })();
  });

  // HTTP down Vote http://localhost:8080/api/v1/links/:id/downvote
  router.post("/:id/downvote", authMiddleware, (req, res) => {
    (async () => {
      const UserID = (req as any).userId;
      const thisUser = await userRepository.findOne(UserID);

      const id = req.params.id;
      const checklinks = await linksRepository.findOne(id);

      if (checklinks) {
        const voted = await voteRepository.find({
          links: checklinks,
          user: thisUser
        });

        if (voted) {
          const govote = { vote: false, user: thisUser, link: checklinks };
          const vote = await voteRepository.save(govote);
          res.json(vote);
        } else {
          res.status(400).send({
            msg: "User already voted!"
          });
        }
      } else {
        res.status(404).send({ msg: "it was  not found the lindID!" });
      }
    })();
  });

  return router;
}
