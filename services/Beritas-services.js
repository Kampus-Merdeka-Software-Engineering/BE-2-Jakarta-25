import { Beritas } from "../models/index.js";

export const getBeritaByDate = async () => {
  return await Beritas.findAll({
    order: [['publish_date', 'DESC']],
    limit: 6,
  });
};

export const getBeritaById = async (beritaId) => {
  return await Beritas.findOne({
    where: { id: beritaId },
  });
};

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