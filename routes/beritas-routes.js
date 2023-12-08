import express, { request, response } from "express";
import { getBeritaEdukasiHome, getBeritaEkonomiHome, getBeritaGayahidupHome, getBeritaHiburanHome, getBeritaItem, getBeritaOlahragaHome, getBeritaOtomotifHome, getBeritaPolitikHome, getBeritas, getBeritaTeknologiHome, getBeritaTeknologiPage, getBeritaTerbaru, getBeritaTerlama, getBeritaTerlama5, postBeritaItem } from "../controllers/beritas-controller.js";

const router = express.Router();

router.get("/", getBeritas);
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