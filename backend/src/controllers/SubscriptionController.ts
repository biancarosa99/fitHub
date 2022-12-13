import express = require("express");
const router = express.Router();

import { getSubscriptions } from "../services/SubscriptionService";

router.get("/subscriptions/", getSubscriptions);

module.exports = router;
