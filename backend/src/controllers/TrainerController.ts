import express = require("express");
const router = express.Router();
import {
  createFitnessClass,
  getTrainerClasses,
  removeFitnessClass,
  getPastTrainerClasses,
} from "../services/TrainerService";
import { verifyToken } from "../middleware/verifyToken";

router.post("/trainer/create", verifyToken, createFitnessClass);
router.delete("/trainer/:id", verifyToken, removeFitnessClass);
router.get("/trainer/", verifyToken, getTrainerClasses);
router.get("/trainer/past", verifyToken, getPastTrainerClasses);

module.exports = router;
