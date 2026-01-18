const mongoose = require("mongoose");

const promptSchema = new mongoose.Schema({
  text: String,
  agentId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model("Prompt", promptSchema);
