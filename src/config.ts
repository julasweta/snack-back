import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const postgresUrl = "postgres://default:pkMLPqsy1R5u@ep-frosty-dawn-a4g5za0q-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require";

if (!process.env.POSTGRES_DATABASE) {
  throw new Error("POSTGRES_URL environment variable is not defined");
} 
const sequelize = new Sequelize(process.env.POSTGRES_DATABASE, {
  logging: false,
});

export default sequelize;
