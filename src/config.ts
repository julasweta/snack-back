import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import pg from "pg";


dotenv.config(); 

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbDialect = process.env.DB_DIALECT;

if (!dbName || !dbUser || !dbPassword || !dbHost || !dbDialect) {
  throw new Error("One or more database environment variables are not defined");
}

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDialect as any, 
  dialectModule: pg,
  logging: false,
});

export default sequelize;
