import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({
    message: "GET all user profile",
  });
});

userRouter.get("/:id", (req, res) => {
  res.send({
    message: "GET user profile " + req.params.id,
  });
});

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
