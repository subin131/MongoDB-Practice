import { MongoClient } from "mongodb";

//creating db url
const url =
  "mongodb+srv://admin:root@cluster0.7r5shx3.mongodb.net/?retryWrites=true&w=majority";

const createUser = async (req, res, next) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
  };
  //creating client
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection("users").insertOne(newUser);
  } catch (error) {
    //for error case
    return res.json({ message: "could not store user" });
  }
  //closing connection
  client.close();
  res.json(newUser);
};
export default { createUser };
