import { Router } from "express";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

import authorize from "../middlewares/auth.middleware.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({
    message: "GET all subscriptions",
  });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({
    message: "GET subscription " + req.params.id,
  });
});

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) => {
  res.send({
    message: "PUT update subscription " + req.params.id,
  });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({
    message: "DELETE subscription " + req.params.id,
  });
});

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({
    message: "PUT cancel subscription " + req.params.id,
  });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({
    message: "GET upcoming renewals",
  });
});

export default subscriptionRouter;
