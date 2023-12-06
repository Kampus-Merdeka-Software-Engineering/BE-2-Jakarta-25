import express from 'express';
import { createUser, readUser } from "../services/Users-services.js"
import { users } from "../constants/users.js";

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getUsers = async (request, response) => {
    const userList = await readUser();
    response.json({
        data: userList,
    });
};

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const postUserItem = async (request, response) => {
    const { nama, email, password } = request.body;

    const user = await createUser(nama, email, password);

    response.json(user);
};