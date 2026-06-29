import dotenv from "dotenv";

dotenv.config();

const getEnvVar = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

export const ENV = {
  PORT: process.env.PORT || "5000",
  MONGO_URI: getEnvVar("MONGO_URI"),
  JWT_SECRET: getEnvVar("JWT_SECRET"),
};