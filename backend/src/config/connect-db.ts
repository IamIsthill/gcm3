import mongoose from "mongoose";
import { ENV } from "./env";

export async function connectDb() {
  console.log("*".repeat(20));
  try {
    await mongoose.connect(ENV.DB_URL);
    console.log("Database is connected");
  } catch (err) {
    console.log("Database connection failed", err);
  }
}
