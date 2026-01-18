const Agent = require("../models/Agent");

exports.createAgent = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Agent name is required" });
    }

    const agent = await Agent.create({
      name,
      description,
      userId: req.userId, // JWT middleware se aata hai
    });

    res.status(201).json({
      message: "Agent created successfully",
      agent,
    });
  } catch (error) {
    console.error("Create Agent Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
