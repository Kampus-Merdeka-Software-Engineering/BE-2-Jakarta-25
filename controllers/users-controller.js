import express from 'express';
import { users } from "../constants/users.js";

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getUsers = (request, response) => {
    response.json({
        nama: "Jonatan Hutahaean",
        email: "jonatanhutahean03@gmail.com",
        password: "asiap123",
    });
};

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getUsersById = (request, response) => {
    // Query Parameter
    const userId = request.query.userId;
    const userData = users[userId];

    if (!userData){
        response.status(404).json({
            message: "Data not found",
        });
        return;
    }

    response.json({
        users: users[userId],
    });
};