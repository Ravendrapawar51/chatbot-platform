const openai = require("../config/openai");
const File = require("../models/File");
const fs = require("fs");

exports.uploadFile = async (req, res) => {
  const uploaded = await openai.files.create({
    file: fs.createReadStream(req.file.path),
    purpose: "assistants"
  });

  await File.create({
    openaiFileId: uploaded.id,
    agentId: req.body.agentId
  });

  res.json({ message: "File uploaded" });
};
