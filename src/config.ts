import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const postgresUrl = "postgres://default:pkMLPqsy1R5u@ep-frosty-dawn-a4g5za0q-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require";

if (!postgresUrl) {
  throw new Error("POSTGRES_URL environment variable is not defined");
}

const sequelize = new Sequelize(postgresUrl, {
  dialect: "postgres",
  dialectModule: pg,
  logging: false,
});

export default sequelize;
