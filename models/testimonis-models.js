import { DataTypes } from 'sequelize';
import sequelize from "../config/sequelize.js";

const Testimonis = sequelize.define("Testimonis", {
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    telp: DataTypes.STRING,
    testimoni: DataTypes.TEXT,
    status: DataTypes.STRING,
});

export default Testimonis;