const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { createPrompt } = require("../controllers/promptController");

router.post("/", auth, createPrompt);

module.exports = router;
