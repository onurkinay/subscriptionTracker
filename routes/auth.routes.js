import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
  // Handle sign-up logic
  res.send({
    message: "User signed up",
  });
});

authRouter.post("/sign-in", (req, res) => {
  // Handle sign-in logic
  res.send({
    message: "User signed in",
  });
});

authRouter.post("/sign-out", (req, res) => {
  // Handle sign-out logic
  res.send({
    message: "User signed out",
  });
});

export default authRouter;
