import express from "express";
import { createSaran, readSaran } from "../services/Sarans-services.js";


/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getSarans = async (request, response) => {
    const saranList = await readSaran();
    response.json({
        data: saranList,
    });
};

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const postSaranItem = async (request, response) => {
    const { nama, email, saran } = request.body;
    
    const saranList = await createSaran(nama, email, saran);

    response.json({
        data: saranList,
    });
};