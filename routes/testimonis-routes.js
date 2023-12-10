import express, { request, response } from "express";
import { getTestimonis, postTestimoniItem } from "../controllers/testimonis-controller.js";

const router = express.Router();

router.get("/", getTestimonis);
router.post("/create", postTestimoniItem);

export default router;