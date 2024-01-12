const { DataTypes } = require('sequelize')
import { db } from "../../connection"


export const Note = db.define("Note", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
})