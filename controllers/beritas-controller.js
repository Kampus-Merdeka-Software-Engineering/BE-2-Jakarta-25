import express, { request, response } from "express";
import { createBerita, getBeritaByDate, getBeritaById, readBerita } from "../services/Beritas-services.js";

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getBeritaTerbaru = async (request, response) => {
    const beritaTerbaru = await getBeritaByDate();

    if (beritaTerbaru.length > 0) {
        response.status(200).json({
            message: 'Success',
            data:beritaTerbaru,
        });
    } else {
        response.status(404).json({
            message: 'Berita tidak ditemukan',
        });
    }
};

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