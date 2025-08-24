import { DataTypes } from "sequelize";
import { sequelize } from "../config/tasks_users_db.js";


export const Label = sequelize.define("label_model", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
    timestamps:false
});

