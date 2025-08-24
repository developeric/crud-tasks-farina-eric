import { sequelize } from "../config/tasks_users_db.js"
import { DataTypes } from "sequelize"


//                                      USER                                             //

export const User = sequelize.define("user_model", {

    name: {
        type: DataTypes.STRING(100), allowNull: false, unique: true,
    },
    email: {
        type: DataTypes.STRING(100), unique: true, allowNull: false
    },
    password: {
        type: DataTypes.STRING(100), allowNull: false
    }
},{
    paranoid: true
});