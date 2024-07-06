import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

//const postgresUrl = process.env.POSTGRES_URL;
//console.log("POSTGRES_URL:", postgresUrl);

/* if (!postgresUrl) {
  throw new Error("POSTGRES_URL environment variable is not defined");
} */
//console.log("POSTGRES_URL: after", postgresUrl);

const sequelize = new Sequelize(
    "postgres://default:pkMLPqsy1R5u@ep-frosty-dawn-a4g5za0q-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
  {
    dialect: "postgres",
    logging: (sql, timing) => {
      console.log("SQL Query:", sql); // Виводимо SQL запит
      console.log("Execution time:", timing, "ms"); // Виводимо час виконання запиту
      console.log("Environment Variables:", process.env); // Виводимо всі змінні середовища
    },
  }
);

export default sequelize;
