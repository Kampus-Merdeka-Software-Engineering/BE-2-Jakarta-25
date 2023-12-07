import express, { request, response } from "express";
import { getBeritaEkonomiHome, getBeritaItem, getBeritaOtomotifHome, getBeritas, getBeritaTeknologiHome, getBeritaTerbaru, postBeritaItem } from "../controllers/beritas-controller.js";

const router = express.Router();

router.get("/", getBeritas);
router.get('/terbaru', getBeritaTerbaru);
router.get('/tekno',getBeritaTeknologiHome);
router.get('/ekonom',getBeritaEkonomiHome);
router.get('/oto',getBeritaOtomotifHome);
router.post('/create', postBeritaItem);
router.get("/:id", getBeritaItem);

export default router;