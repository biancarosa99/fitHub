import express = require("express");
const router = express.Router();

import {
  getCurrentWeekSchedule,
  getScheduledClassUsers,
  getFitnessClasses,
} from "../services/ScheduledClassService";

router.get("/schedule/", getCurrentWeekSchedule);
router.get("/schedule/users/:id", getScheduledClassUsers);
router.get;

module.exports = router;
