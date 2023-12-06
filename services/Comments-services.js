import { Comments } from "../models/index.js";

export const readComment = async () => {
    return await Comments.findAll();
};

export const createComment = async (teks) => {
    return await Comments.create({
        teks,
    });
};