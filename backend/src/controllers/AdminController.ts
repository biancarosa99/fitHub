import express = require("express");
import { verifyToken } from "../middleware/verifyToken";
const router = express.Router();

import {
  createFitnessClass,
  createLocation,
  createSubscription,
} from "../services/AdminService";

router.post("/admin/location", verifyToken, createLocation); // create a location
router.post("/admin/subscription", verifyToken, createSubscription); // create a subscription
router.post("/admin/fitnessClass", verifyToken, createFitnessClass); // create a fitness class

module.exports = router;
