const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");

// ADD USER
router.post("/", userController.addUser);

//GET ALL USER
router.get("/", userController.getAllUsers);

//GET USER BY ID
router.get("/:id", userController.getUserById);

//UPDATE USER
router.put("/:id", userController.updateUser);

//DELETE USER
router.delete("/:id", userController.deleteUser);

module.exports = router;
