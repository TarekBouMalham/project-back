import dotenv from "dotenv";

dotenv.config();

const getRequiredEnvVar = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Required environment variable "${key}" is not defined`);
  }
  return value;
};

const ENV = {
  PORT: process.env.PORT || "5000",
  MONGO_URI: getRequiredEnvVar("MONGO_URI"),
  JWT_SECRET: getRequiredEnvVar("JWT_SECRET"),
};

export default ENV;