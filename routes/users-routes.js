import express from "express";
import { getUsers, getUsersById } from "../controllers/users-controller.js";


const router = express.Router();

// router.get("/", getUsers);

router.get("/", getUsersById);

export default router;