import express from "express";
import { PORT } from "./config/env.js";
import routes from "./routes/_index.js";
import connectToDatabase from "./database/mongodb.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", routes);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  await connectToDatabase();
});

export default app;
