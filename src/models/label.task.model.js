import { DataTypes } from "sequelize";
import { sequelize } from "../config/tasks_users_db.js";
import { Label } from "./label.model.js";
import { Task } from "./task.model.js";


export const LabelTask = sequelize.define("label_task",
    {
        id :{
            type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,
        },
    },
{
    timestamps:false
});


LabelTask.belongsTo(Task, { foreignKey: "task_id" });
LabelTask.belongsTo(Label, { foreignKey: "label_id" });

Task.hasMany(LabelTask, { foreignKey: "task_id" });
Label.hasMany(LabelTask, { foreignKey: "label_id" });
