import express, { request, response } from "express";
import { getComments, postCommentItem } from "../controllers/comments-controller.js";

const router = express.Router();

router.get("/", getComments);
router.post("/create", postCommentItem);

export default router;