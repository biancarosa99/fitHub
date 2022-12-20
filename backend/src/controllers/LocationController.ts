import express = require("express");
const router = express.Router();

import { getLocations } from "../services/LocationService";

router.get("/locations/", getLocations);

module.exports = router;
