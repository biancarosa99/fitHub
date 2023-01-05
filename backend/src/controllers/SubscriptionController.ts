import express = require("express");
const router = express.Router();

import { getSubscriptions } from "../services/SubscriptionService";

router.get("/subscriptions/", getSubscriptions); // get all subscription types

module.exports = router;
