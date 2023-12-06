import { DataTypes } from 'sequelize';
import sequelize from "../config/sequelize.js";

const Comments = sequelize.define("Comments", {
    teks: DataTypes.TEXT,
});

export default Comments;