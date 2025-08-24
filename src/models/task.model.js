import { sequelize } from "../config/tasks_users_db.js";
import { DataTypes } from "sequelize";
import { Profile } from "./profile.model.js";

//                                      TASK                                             //

export const Task = sequelize.define(
  "task_models",
  {
    title: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    isComplete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  })
{
  Task.belongsTo(Profile,{foreignKey: "task_id",
    as: "tasks",onDelete: "CASCADE"
  });

  Profile.hasMany(Task,{foreignKey: "task_id",
    as: "tasks"
  })
}


