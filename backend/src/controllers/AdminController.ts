import express = require("express");
import { verifyToken } from "../middleware/verifyToken";
const router = express.Router();

import {
  createFitnessClass,
  createLocation,
  createSubscription,
} from "../services/AdminService";

router.post("/admin/location", verifyToken, createLocation);
router.post("/admin/subscription", verifyToken, createSubscription);
router.post("/admin/fitnessClass", verifyToken, createFitnessClass);

module.exports = router;
