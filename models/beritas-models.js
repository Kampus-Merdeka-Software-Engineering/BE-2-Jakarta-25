import { DataTypes } from 'sequelize';
import sequelize from "../config/sequelize.js";

const Beritas = sequelize.define("Beritas", {
    judul:DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    foto: DataTypes.TEXT,
    publish_date: DataTypes.DATE,
    kategori: DataTypes.STRING,
    penulis: DataTypes.STRING,
});

export default Beritas;