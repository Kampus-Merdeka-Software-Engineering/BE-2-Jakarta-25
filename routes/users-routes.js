import express, {request, response} from "express";
import { getUsers, postUserItem } from "../controllers/users-controller.js";


const router = express.Router();

router.get("/", getUsers);
router.post("/create", postUserItem);

export default router;