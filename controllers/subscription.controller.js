import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json({ success: true, data: subscription });
  } catch (error) {
    console.error("Error creating subscription:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

export const getUserSubscriptions = async (req, res) => {
  try {
    if (req.user.id !== req.params.id) {
      const error = new Error("You are not the owner of this account");
      error.status = 401;
      throw error;
    }

    const subscriptions = await Subscription.find({ user: req.params.id });
    res.status(200).json({ success: true, data: subscriptions });
  } catch (error) {
    console.error("Error fetching user subscriptions:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};
