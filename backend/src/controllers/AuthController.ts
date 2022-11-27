import express = require("express");
const router = express.Router();

import { register, login } from "../services/AuthService";

router.post("/auth/register", register);
router.post("/auth/login", login);

module.exports = router;
