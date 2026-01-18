const router = require("express").Router();
const multer = require("multer");
const auth = require("../middleware/authMiddleware");
const { uploadFile } = require("../controllers/fileController");

const upload = multer({ dest: "uploads/" });

router.post("/", auth, upload.single("file"), uploadFile);

module.exports = router;
