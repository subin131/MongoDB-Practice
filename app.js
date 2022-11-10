import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from "./routes/routes.js";

const app = express();

app.use(bodyParser.json());

// ...
mongoose.connect(
  "mongodb+srv://admin:root@cluster0.7r5shx3.mongodb.net/?retryWrites=true&w=majority"
);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(express.json());

app.listen(7000, () => {
  console.log(`Server Started at ${7000}`);
});

app.use("/api", routes);
