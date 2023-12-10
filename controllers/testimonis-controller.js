import express from "express";
import { createTestimoni, readTestimoni } from "../services/Testimonis-services.js";


/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getTestimonis = async (request, response) => {
    const testimoniList = await readTestimoni();
    response.json({
        data: testimoniList,
    });
};

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const postTestimoniItem = async (request, response) => {
    const { nama, email, telp, testimoni, status } = request.body;
    
    const testimoniList = await createTestimoni(nama, email, telp, testimoni, status);

    response.json({
        data: testimoniList,
    });
};