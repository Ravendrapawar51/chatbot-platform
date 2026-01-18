import { useState } from "react";
import "./index.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();

    // user message add
    setMessages(prev => [...prev, { type: "user", text: userMsg }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          agentId: "696aae24ce69f3c0c4589fcb",
          message: userMsg
        })
      });

      const data = await res.json();

      if (!res.ok) throw new Error("Server error");

      // bot reply add
      setMessages(prev => [
        ...prev,
        { type: "bot", text: data.botReply }
      ]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { type: "error", text: "Server error" }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <h2>🤖 Chatbot</h2>

      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={msg.type}>
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="bot">Typing...</div>
        )}
      </div>

      <div className="input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          disabled={loading}
        />
        <button onClick={sendMessage} disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default App;
