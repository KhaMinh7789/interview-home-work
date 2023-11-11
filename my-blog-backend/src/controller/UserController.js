const { User, Post, Comment } = require("../models/model");

const userController = {
  //ADD User
  addUser: async (req, res) => {
    try {
      const newUser = new User(req.body);
      const saveUser = await newUser.save();
      res.status(200).json(saveUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //GET ALL USER
  getAllUsers: async (req, res) => {
    try {
      const user = await User.find().populate("post").populate("comment");
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //GET USER BY ID
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id)
        .populate("post")
        .populate("comment");
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //UPDATE USER
  updateUser: async (req, res) => {
    try {
      const updateUser = await User.findById(req.params.id);
      await updateUser.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //DELETE USER
  deleteUser: async (req, res) => {
    try {
      await Comment.deleteMany({ user: req.params.id });
      await Post.deleteMany({ user: req.params.id });
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = userController;
