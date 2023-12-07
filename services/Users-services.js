import { Users } from "../models/index.js";

export const getUserByEmail = async (email) => {
    return await Users.findOne( { where: { email } });
}

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