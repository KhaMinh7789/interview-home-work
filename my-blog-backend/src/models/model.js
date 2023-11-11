const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  name: { type: String },
  dob: { type: String },
  created_at: { type: String },
  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const commentSchema = new mongoose.Schema({
  owner: { type: Number },
  content: { type: String },
  created_at: { type: String },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const postSchema = new mongoose.Schema({
  owner: { type: Number },
  title: { type: String },
  content: { type: String },
  created_at: { type: String },
  tags: { type: [String] },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Comment = mongoose.model("Comment", commentSchema);
const Post = mongoose.model("Post", postSchema);
module.exports = { User, Comment, Post };
