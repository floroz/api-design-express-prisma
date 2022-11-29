import express from "express";
import { router } from "./router";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", [protect], router);

/**
 * Auth
 */

app.post("/user", createNewUser);
app.post("/signin", signin);

app.use("/ping", (req, res) => {
  res.send("Ping");
});

export { app };
