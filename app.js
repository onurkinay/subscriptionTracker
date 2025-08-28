import express from "express";
import { PORT } from "./config/env.js";
import routes from "./routes/index.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
