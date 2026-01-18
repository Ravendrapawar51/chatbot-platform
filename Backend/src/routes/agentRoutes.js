const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const { createAgent } = require("../controllers/agentController");

// Protected route
router.post("/", auth, createAgent);

module.exports = router;
