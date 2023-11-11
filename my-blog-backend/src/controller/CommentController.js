const { User, Post, Comment } = require("../models/model");

const commentController = {
  //ADD POST
  addComment: async (req, res) => {
    try {
      const newComment = new Comment(req.body);
      const saveComment = await newComment.save();
      if (req.body.user && req.body.post) {
        const user = User.findById(req.body.user);
        await user.updateOne({ $push: { comment: saveComment._id } });
        const post = Post.findById(req.body.post);
        await post.updateOne({ $push: { comment: saveComment._id } });
      }
      res.status(200).json(saveComment);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // GET ALL POST
  getAllComment: async (req, res) => {
    try {
      const comment = await Comment.find().populate("user");
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //GET COMMENT BY ID
  getCommentById: async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id).populate("user");
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //GET COMMENT BY ID USER
  getCommentByIdUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId).populate("comment");
      const comments = await Post.find({ user: userId });
      res.status(200).json(comments, user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //UPDATE COMMENT
  updateComment: async (req, res) => {
    try {
      const updateComment = await Comment.findById(req.params.id);
      await updateComment.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //DELETE COMMENT
  deleteComment: async (req, res) => {
    try {
      await User.updateMany(
        { comment: req.params.id },
        { $pull: { comment: req.params.id } }
      );
      await Comment.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = commentController;
