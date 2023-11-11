const express = require("express");
const router = express.Router();
const commentController = require("../controller/CommentController");

//ADD COMMENT
router.post("/", commentController.addComment);

//GET ALL COMMENT
router.get("/", commentController.getAllComment);

//GET COMMENT BY ID
router.get("/:id", commentController.getCommentById);

//GET COMMENT BY ID USER
router.get("/comment/:id", commentController.getCommentByIdUser);

//UPDATE COMMENT
router.put("/:id", commentController.updateComment);

//DELETE COMMENT
router.delete("/:id", commentController.deleteComment);

module.exports = router;
