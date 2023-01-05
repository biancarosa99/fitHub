import express = require("express");
const router = express.Router();

import { getLocations } from "../services/LocationService";

router.get("/location/", getLocations); // get locations

module.exports = router;
