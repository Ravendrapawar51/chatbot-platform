const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Root route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully");
});

// ✅ API Routes (YAHAN ADD KARNA HAI)
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/agents", require("./routes/agentRoutes"));
app.use("/api/prompts", require("./routes/promptRoutes"));
app.use("/api/chat", require("./routes/chatRoutes"));
app.use("/api/files", require("./routes/fileRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
