import express = require("express");
const router = express.Router();

import {
  getCurrentWeekSchedule,
  getScheduledClassUsers,
} from "../services/ScheduledClassService";

router.get("/schedule/", getCurrentWeekSchedule);
router.get("/schedule/users/:id", getScheduledClassUsers);

module.exports = router;
