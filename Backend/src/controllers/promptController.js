const Prompt = require("../models/Prompt");

exports.createPrompt = async (req, res) => {
  const prompt = await Prompt.create({
    text: req.body.text,
    agentId: req.body.agentId
  });
  res.json(prompt);
};
