"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = __importDefault(require("pg"));
dotenv_1.default.config();
const postgresUrl = "postgres://default:pkMLPqsy1R5u@ep-frosty-dawn-a4g5za0q-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require";
if (!postgresUrl) {
    throw new Error("POSTGRES_URL environment variable is not defined");
}
const sequelize = new sequelize_1.Sequelize(postgresUrl, {
    dialect: "postgres",
    dialectModule: pg_1.default,
    logging: false,
});
exports.default = sequelize;
