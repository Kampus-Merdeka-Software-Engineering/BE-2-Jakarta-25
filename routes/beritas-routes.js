import express, { request, response } from "express";
import { getBeritas } from "../controllers/beritas-controller.js";

const router = express.Router();

router.get("/", getBeritas);

export default router;