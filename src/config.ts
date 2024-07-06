import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const postgresUrl = process.env.POSTGRES_URL;

if (!postgresUrl) {
  throw new Error("POSTGRES_URL environment variable is not defined");
}

const sequelize = new Sequelize(postgresUrl, {
  dialect: "postgres",
  logging: false,
});

export default sequelize;
