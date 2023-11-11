const { User, Post, Comment } = require("../models/model");

const postController = {
  //ADD POST
  addPost: async (req, res) => {
    try {
      const newPost = new Post(req.body);
      const savePost = await newPost.save();
      if (req.body.user) {
        const user = User.findById(req.body.user);
        await user.updateOne({ $push: { post: savePost._id } });
      }
      res.status(200).json(savePost);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // GET ALL POST
  getAllPost: async (req, res) => {
    try {
      const post = await Post.find().populate("user").populate("comment");
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //GET POST BY ID
  getPostById: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
        .populate("user")
        .populate("comment");
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //GET POST BY ID USER
  getPostByIdUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId).populate("post");
      const posts = user.post;
      res.status(200).json(posts, user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //UPDATE POST
  updatePost: async (req, res) => {
    try {
      const updatePost = await Post.findById(req.params.id);
      await updatePost.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //DELETE POST
  deletePost: async (req, res) => {
    try {
      await User.updateMany(
        { post: req.params.id },
        { $pull: { post: req.params.id } }
      );
      await Post.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = postController;
