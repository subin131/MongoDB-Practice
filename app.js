import express from "express";
import bodyParser from "body-parser";
import MongoPractice from "./db.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post("/products", MongoPractice.createUser);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
