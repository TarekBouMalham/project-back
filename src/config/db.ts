import mongoose from "mongoose";
import { ENV } from "./env";

const connectDB = async (): Promise<void> => {
  try {
    const uri = ENV.MONGO_URI;
    if (!uri) {
      throw new Error("MONGO_URI is not defined in the environment variables");
    }
    await mongoose.connect(ENV.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;