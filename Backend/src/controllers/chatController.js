exports.chat = async (req, res) => {
  try {
    const { agentId, message } = req.body;

    // Validation
    if (!agentId || !message) {
      return res.status(400).json({
        message: "agentId and message are required",
      });
    }

    // Dummy / rule-based response
    let reply = "";

    if (message.toLowerCase().includes("hello")) {
      reply = "Hello 👋 How can I help you today?";
    } 
    else if (message.toLowerCase().includes("who are you")) {
      reply = "I am a smart chatbot agent created for demo purposes 🤖";
    } 
    else {
      reply = `You said: "${message}". This is a dummy chatbot response.`;
    }

    // Send response
    res.status(200).json({
      message: "Chat response generated successfully",
      agentId,
      userMessage: message,
      botReply: reply,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
