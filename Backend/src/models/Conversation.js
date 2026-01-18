const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  agentId: mongoose.Schema.Types.ObjectId,
  message: String,
  response: String,
}, { timestamps: true });

module.exports = mongoose.model("Conversation", conversationSchema);
