import express, { request, response } from "express";
import { getBeritaEdukasiHome, getBeritaEdukasiPage, getBeritaEkonomiHome, getBeritaEkonomiPage, getBeritaGayahidupHome, getBeritaGayahidupPage, getBeritaHiburanHome, getBeritaHiburanPage, getBeritaItem, getBeritaOlahragaHome, getBeritaOlahragaPage, getBeritaOtomotifHome, getBeritaOtomotifPage, getBeritaPolitikHome, getBeritaPolitikPage, getBeritas, getBeritaTeknologiHome, getBeritaTeknologiPage, getBeritaTerbaru, getBeritaTerlama, getBeritaTerlama5, postBeritaItem } from "../controllers/beritas-controller.js";

const router = express.Router();

router.get("/", getBeritas);
router.get('/hiburan', getBeritaHiburanPage);
router.get('/edukasi', getBeritaEdukasiPage);
router.get('/gayahidup', getBeritaGayahidupPage);
router.get('/politik', getBeritaPolitikPage);
router.get('/olahraga', getBeritaOlahragaPage);
router.get('/otomotif', getBeritaOtomotifPage);
router.get('/ekonomi', getBeritaEkonomiPage);
router.get('/teknologi', getBeritaTeknologiPage);
router.get('/terlama', getBeritaTerlama);
router.get('/terlama/page', getBeritaTerlama5);
router.get('/terbaru', getBeritaTerbaru);
router.get('/tekno',getBeritaTeknologiHome);
router.get('/ekonom',getBeritaEkonomiHome);
router.get('/oto',getBeritaOtomotifHome);
router.get('/olah',getBeritaOlahragaHome);
router.get('/pol',getBeritaPolitikHome);
router.get('/gaya',getBeritaGayahidupHome);
router.get('/edu',getBeritaEdukasiHome);
router.get('/hibur',getBeritaHiburanHome);
router.post('/create', postBeritaItem);
router.get("/:id", getBeritaItem);

export default router;