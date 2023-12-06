import express from "express";
import { createBerita, getBeritaById, readBerita } from "../services/Beritas-services.js";

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getBeritaItem = async (request, response) => {
    const id = request.params.id;

    const berita = await getBeritaById(id);

    if(berita === null) {
        return response.status(404).json({
            message: "Data not Found",
        });
    }

    response.status(200).json({
        data: berita,
    });
};

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getBeritas = async (request, response) => {
    const beritaList = await readBerita();

    console.log({ beritaList });

    response.status(200).json({
        data: beritaList,
        message: "Sukses mengambil data berita",
    });
};

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const postBeritaItem = async (request, response) => {
    const { judul, deskripsi, foto, publish_date, kategori, penulis } = request.body;

    const berita = await createBerita(judul, deskripsi, foto, publish_date, kategori, penulis);

    response.json(berita);
};