import express, { request, response } from "express";
import { getBeritaItem, getBeritas, postBeritaItem } from "../controllers/beritas-controller.js";

const router = express.Router();

router.get("/:id", getBeritaItem);
router.get("/", getBeritas);
router.post('/create', postBeritaItem);

export default router;