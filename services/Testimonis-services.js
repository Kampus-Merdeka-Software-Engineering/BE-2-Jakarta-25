import { Testimonis } from "../models/index.js";

export const readTestimoni = async () => {
    return await Testimonis.findAll();
};

export const createTestimoni = async (nama, email, telp, testimoni, status) => {
    return await Testimonis.create({
        nama,
        email,
        telp,
        testimoni,
        status,
    });
};