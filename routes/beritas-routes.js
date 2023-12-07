import express, { request, response } from "express";
import { getBeritaItem, getBeritas, getBeritaTerbaru, postBeritaItem } from "../controllers/beritas-controller.js";

const router = express.Router();

router.get("/", getBeritas);
router.get('/terbaru', getBeritaTerbaru);
router.post('/create', postBeritaItem);
router.get("/:id", getBeritaItem);

export default router;