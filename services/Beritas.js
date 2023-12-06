import { Beritas } from "../models/index.js";

export const readBerita = async () => {
    return await Beritas.findAll();
};

export const createBerita = async (
  judul,
  deskripsi,
  foto,
  publish_date,
  kategori,
  penulis
) => {
  return await Beritas.create({
    judul,
    deskripsi,
    foto,
    publish_date,
    kategori,
    penulis,
  });
};