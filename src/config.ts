import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Завантажує змінні оточення з .env файлу


const sequelize = new Sequelize(
  `postgresql://postgress:GgrrROvO1tuJjxgc73PoJsclaJY6n2Mf@dpg-cq4i5mo8fa8c73fprar0-a.virginia-postgres.render.com/snack_9fzy`,
  {
    dialectOptions: {
      ssl: {
        require: true, // Вимагати захищене з'єднання
        rejectUnauthorized: false, // Відхиляти неавторизовані SSL сертифікати (необхідно в деяких середовищах)
      },
    },
  }
);
export default sequelize;
