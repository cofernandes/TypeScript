import * as express from "express";
import { getUserRepository } from "./../repositories/user_repository";
import * as joi from "joi";

// Cristian Olimpip Fernandes 2016323

export function getUserController() {
  const userRepository = getUserRepository();
  const router = express.Router();

  const userDetailsSchema = {
    email: joi.string().email(),
    password: joi.string()
  };

  // HTTP POST http://localhost:8080/api/v1/users
  router.post("/", (req, res) => {
    (async () => {
      const newUser = req.body;
      const result = joi.validate(newUser, userDetailsSchema);
      if (result.error) {
        res.status(400).send();
      } else {
        const user = await userRepository.save(newUser);
        res.json({ ok: "ok" }).send();
      }
    })();
  });

  // HHTP RETURN ALL THE USERS http://localhost:8080/api/v1/users/:id
  router.get("/", (req, res) => {
    (async () => {
      const users = await userRepository.find();
      res.json(users);
    })();
  });

  return router;
}
