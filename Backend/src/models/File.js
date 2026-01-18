const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  openaiFileId: String,
  agentId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model("File", fileSchema);
