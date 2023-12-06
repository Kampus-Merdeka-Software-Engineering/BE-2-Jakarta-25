import express from "express";
import { createComment, readComment } from "../services/Comments-services.js";


/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getComments = async (request, response) => {
    const commentList = await readComment();
    response.json({
        data: commentList,
    });
};

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const postCommentItem = async (request, response) => {
    const { teks } = request.body;
    
    const comment = await createComment(teks);

    response.json({
        data: comment,
    });
};