import express from "express";
//importing model from model.js
import Model from "../modals/model.js";
import Todo from "../modals/toDo.js";
const router = express.Router();

router.post("/post", async (req, res) => {
  const data = new Model({
    name: req.body.name,
    age: req.body.age,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  //   res.send("Hello World");
});
router.post("/todo", async (req, res) => {
  const data = new Todo({
    name: req.body.name,
    email: req.body.email,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  //   res.send("Hello World");
});
router.get("/get", (req, res) => {
  res.send("Get all the records");
});
export default router;
