import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

//Conexão com o mongodb
const mongoClient = new MongoClient("mongodb://localhost:27017");

try {
  await mongoClient.connect();
  console.log("MongoDB conectado!");
} catch (error) {
  console.log(error.message);
}

const db = mongoClient.db("store");

export default db;
