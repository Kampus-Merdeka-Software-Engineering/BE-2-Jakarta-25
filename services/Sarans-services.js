import { Sarans } from "../models/index.js";

export const readSaran = async () => {
    return await Sarans.findAll();
};

export const createSaran = async (nama, email, saran) => {
    return await Sarans.create({
        nama,
        email,
        saran,
    });
};