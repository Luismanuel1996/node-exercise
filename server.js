import express from "express";
import config from "./config/index.js";
import morgan from "morgan";
import path from "path";
import apiRouter from "./routes";


const app = express();

app.use(express.json());

app.use(morgan("common"));

app.use("/api", apiRouter);

app.use(express.static(path.join(__dirname, "./public")));



app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});