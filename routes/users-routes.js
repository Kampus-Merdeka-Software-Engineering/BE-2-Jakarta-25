import express, {request, response} from "express";
import { postUserItem } from "../controllers/users-controller.js";


const router = express.Router();

router.post("/create", postUserItem);

export default router;