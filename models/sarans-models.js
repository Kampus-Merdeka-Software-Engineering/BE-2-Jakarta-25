import { DataTypes } from 'sequelize';
import sequelize from "../config/sequelize.js";

const Sarans = sequelize.define("Sarans", {
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    saran: DataTypes.TEXT,
});

export default Sarans;