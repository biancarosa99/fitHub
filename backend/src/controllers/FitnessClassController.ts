import express = require("express");
const router = express.Router();

import { getFitnessClasses } from "../services/FitnessClassService";

router.get("/fitnessClass/", getFitnessClasses); // get fitness classes (used for home screen)

module.exports = router;
