import { DataTypes } from "sequelize";
import sequelize from "../config";

const Score = sequelize.define("Score", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Score;
