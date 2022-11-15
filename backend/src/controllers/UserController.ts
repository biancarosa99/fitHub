const express = require("express");
const router = express.Router();

const {
  createUser,
  loginUser,
  getAllUsers,
  getUser,
  editUser,
  deleteUser,
  changePassword,
} = require("../services/UserService");

const { verifyToken } = require("../middleware/verifyToken");

router.post("/users/register", createUser);
router.get("/users/", getAllUsers);
router.get("/users/:id", getUser);
router.put("/users/:id", verifyToken, editUser);
router.delete("/users/:id", verifyToken, deleteUser);
router.put("/users/password/:id", verifyToken, changePassword);
router.post("/users/login", loginUser);

module.exports = router;
