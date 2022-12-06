import express = require("express");
const router = express.Router();
// import { getAllUsers, getUser, editUser, deleteUser, changePassword } from "../services/UserService";
import {
  buySubscription,
  getUser,
  makeAppointment,
} from "../services/UserService";
import { verifyToken } from "../middleware/verifyToken";

// import { verifyToken } from "../middleware/verifyToken";

router.get("/user/:id", verifyToken, getUser);
router.post("/users/appointment", verifyToken, makeAppointment);
router.post("/users/buySubscription", verifyToken, buySubscription);
// router.delete("/users/:id", verifyToken, deleteUser);
// router.put("/users/password/:id", verifyToken, changePassword);

module.exports = router;
