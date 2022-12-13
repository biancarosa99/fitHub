import express = require("express");
const router = express.Router();
import {
  buySubscription,
  getUser,
  getUserAppointments,
  getPastUserAppointments,
  makeAppointment,
  removeAppointment,
} from "../services/UserService";
import { verifyToken } from "../middleware/verifyToken";

router.get("/user/:id", verifyToken, getUser);
router.post("/users/appointment", verifyToken, makeAppointment);
router.post("/users/buySubscription", verifyToken, buySubscription);
router.delete("/users/appointment/:id", verifyToken, removeAppointment);
router.get("/users/appointment", verifyToken, getUserAppointments);
router.get("/users/appointment/past", verifyToken, getPastUserAppointments);

module.exports = router;
