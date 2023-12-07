import { Beritas } from "../models/index.js";

export const getHiburan3 = async () => {
  return await Beritas.findAll({
    where: {
      kategori: 'Hiburan',
    },
    order: [['publish_date', 'DESC']],
    limit: 3,
  });
};

export const getEdukasi3 = async () => {
  return await Beritas.findAll({
    where: {
      kategori: 'Edukasi',
    },
    order: [['publish_date', 'DESC']],
    limit: 3,
  });
};

export const getGayahidup3 = async () => {
  return await Beritas.findAll({
    where: {
      kategori: 'Gayahidup',
    },
    order: [['publish_date', 'DESC']],
    limit: 3,
  });
};

export const getPolitik3 = async () => {
  return await Beritas.findAll({
    where: {
      kategori: 'Politik',
    },
    order: [['publish_date', 'DESC']],
    limit: 3,
  });
};

export const getOlahraga3 = async () => {
  return await Beritas.findAll({
    where: {
      kategori: 'Olahraga',
    },
    order: [['publish_date', 'DESC']],
    limit: 3,
  });
};

export const getOtomotif3 = async () => {
  return await Beritas.findAll({
    where: {
      kategori: 'Otomotif',
    },
    order: [['publish_date', 'DESC']],
    limit: 3,
  });
};

export const getEkonomi3 = async () => {
  return await Beritas.findAll({
    where: {
      kategori: 'Ekonomi',
    },
    order: [['publish_date', 'DESC']],
    limit: 3,
  });
};

export const getTeknologi3 = async () => {
  return await Beritas.findAll({
    where: {
      kategori: 'Teknologi',
    },
    order: [['publish_date', 'DESC']],
    limit: 3,
  });
};

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