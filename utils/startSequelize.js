import sequelize from "../config/sequelize.js";

export const startSequelize = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        console.log("Available models on sequelize =>", Object.keys(sequelize.models).join(", "));
    } catch (e) {
        console.error(e);
    }
};