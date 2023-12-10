import express, { request, response } from "express";
import { getSarans, postSaranItem } from "../controllers/sarans-controller.js";

const router = express.Router();

router.get("/", getSarans);
router.post("/create", postSaranItem);

export default router;