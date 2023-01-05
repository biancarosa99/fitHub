import express = require("express");
import { verifyToken } from "../middleware/verifyToken";
const router = express.Router();

import {
  getCurrentWeekSchedule,
  getScheduledClassUsers,
  getScheduledClassInfo,
  getScheduledClassSpots,
} from "../services/ScheduledClassService";

router.get("/schedule/", getCurrentWeekSchedule); // gets this week's scheduled classes
router.get(
  "/schedule/users/:scheduledClassId",
  verifyToken,
  getScheduledClassUsers
); // gets a scheduled class users
router.get(
  "/schedule/info/:scheduledClassId",
  verifyToken,
  getScheduledClassInfo
); // gets a scheduled class info
router.get("/schedule/spots/:scheduledClassId", getScheduledClassSpots); // gets a scheduled nr of occupied spots

module.exports = router;
