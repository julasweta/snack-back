import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Завантажує змінні оточення з .env файлу

const postgresUrl = process.env.POSTGRES_URL;
const sequelize = new Sequelize(postgresUrl? postgresUrl: '', {
  dialectOptions: {
    ssl: {
      require: true, // Вимагати захищене з'єднання
      rejectUnauthorized: false, // Відхиляти неавторизовані SSL сертифікати (необхідно в деяких середовищах)
    },
  },
});
export default sequelize;
