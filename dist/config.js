"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//const postgresUrl = process.env.POSTGRES_URL;
//console.log("POSTGRES_URL:", postgresUrl);
/* if (!postgresUrl) {
  throw new Error("POSTGRES_URL environment variable is not defined");
} */
//console.log("POSTGRES_URL: after", postgresUrl);
const sequelize = new sequelize_1.Sequelize("postgres://default:pkMLPqsy1R5u@ep-frosty-dawn-a4g5za0q-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require", {
    dialect: "postgres",
    logging: (sql, timing) => {
        console.log("SQL Query:", sql); // Виводимо SQL запит
        console.log("Execution time:", timing, "ms"); // Виводимо час виконання запиту
        console.log("Environment Variables:", process.env); // Виводимо всі змінні середовища
    },
});
exports.default = sequelize;
