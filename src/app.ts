import express, { Express } from "express";
import { router } from "./routes";
var bodyParser = require("body-parser");

const app: Express = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

app.get("/", () => {
  console.log("Hello world");
});

export default app;
