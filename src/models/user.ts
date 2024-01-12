const { DataTypes } = require('sequelize')
import { db } from "../../connection"


export const User = db.define("User", {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})