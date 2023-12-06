import { Users } from "../models/index.js";

export const readUser = async () => {
    return await Users.findAll();
};

export const createUser = async (
    nama,
    email,
    password,
) => {
    return await Users.create({
        nama,
        email,
        password,
    });
}