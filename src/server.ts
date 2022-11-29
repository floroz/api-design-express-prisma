import express from "express";
import { router } from "./router";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);

app.use("/ping", (req, res) => {
  res.send("Ping");
});

export { app };
