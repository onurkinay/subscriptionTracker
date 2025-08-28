import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { getUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => {
  res.send({
    message: "POST create user profile",
  });
});

userRouter.put("/:id", (req, res) => {
  res.send({
    message: "PUT update user profile " + req.params.id,
  });
});

userRouter.delete("/:id", (req, res) => {
  res.send({
    message: "DELETE user profile " + req.params.id,
  });
});

export default userRouter;
