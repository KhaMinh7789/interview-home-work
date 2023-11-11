const express = require("express");
const router = express.Router();
const postController = require("../controller/PostController");

//ADD POST
router.post("/", postController.addPost);

//GET ALL POST
router.get("/", postController.getAllPost);

//GET POST BY ID
router.get("/:id", postController.getPostById);

//GET POST BY ID USER
router.get("/user/:id", postController.getPostByIdUser);

//UPDATE POST
router.put("/:id", postController.updatePost);

//DELETE POST
router.delete("/:id", postController.deletePost);

module.exports = router;
