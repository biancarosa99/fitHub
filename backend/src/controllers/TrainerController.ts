import express = require("express");
const router = express.Router();
import { createClass } from "../services/TrainerService";
import { verifyToken } from "../middleware/verifyToken";

router.post("/trainer/create", verifyToken, createClass);

// router.get("/users/", getAllUsers);
// router.put("/users/:id", verifyToken, editUser);
// router.delete("/users/:id", verifyToken, deleteUser);
// router.put("/users/password/:id", verifyToken, changePassword);

module.exports = router;
