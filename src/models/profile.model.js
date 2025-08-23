import { DataTypes } from "sequelize";
import { sequelize } from "../config/tasks_users_db.js";
import { User } from "./user.model.js";

export const Profile = sequelize.define("profile_model", {
  real_name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},{
    timestamps:false
});

User.hasOne(Profile,{foreignKey: "user_id"})

Profile.belongsTo(User,{foreignKey: "user_id"})