import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Users = sequelize.define("Users", {
    nama: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

export default Users;