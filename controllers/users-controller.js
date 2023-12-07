import express from 'express';
import { createUser } from "../services/Users-services.js"

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