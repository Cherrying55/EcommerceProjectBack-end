import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
try {
  await mongoClient.connect();
  console.log("MongoDB conectado com sucesso!");
} catch (err) {
  console.log(err);
}

const db = mongoClient.db("starr");
export const usersCollection = db.collection("users");
export const wishlistsCollection = db.collection("wishlists");
export const sessionsCollection = db.collection("sessions");
export const cartsCollection = db.collection("carts");
export const bestsellingCollection = db.collection("bestselling");