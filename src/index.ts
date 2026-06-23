import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express, { Application, Request, Response } from "express";
import connectDB from "./config/db";
async function main() {
  await connectDB();

  const app: Application = express();
  const PORT = process.env.PORT || 5000;

  app.use(cors());
  app.use(express.json());

  app.get("/api", (req: Request, res: Response) => {
    res.json({ message: "Backend is running!" });
  });

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

main();