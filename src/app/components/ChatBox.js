import { useState, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import { FiPaperclip } from "react-icons/fi";
import { HiArrowUpCircle } from "react-icons/hi2";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi, I’m SrikanthGPT! 👋 How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const handleSendMessage = async () => {
    // Prevent sending empty messages or duplicate submissions while loading
    if (!input.trim() || loading) return;

    const currentInput = input.trim();
    setLoading(true);

    // Add the user's message
    const userMessage = { id: Date.now(), text: currentInput, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Add a typing indicator for the bot
    const typingIndicator = { id: Date.now() + 1, text: "SrikanthGPT is typing...", sender: "bot", typing: true };
    setMessages(prev => [...prev, typingIndicator]);

    try {
      // Call the backend endpoint at /chat_hf with the prompt
      const response = await fetch("http://localhost:8000/chat_hf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: currentInput })
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      // Remove typing indicator and append the bot's answer
      setMessages(prev => {
        const updatedMessages = prev.filter(msg => !msg.typing);
        return [...updatedMessages, { id: Date.now() + 2, text: data.answer, sender: "bot" }];
      });
    } catch (error) {
      console.error("Error fetching chat response:", error);
      setMessages(prev => {
        const updatedMessages = prev.filter(msg => !msg.typing);
        return [...updatedMessages, { id: Date.now() + 2, text: "Sorry, something went wrong.", sender: "bot" }];
      });
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen w-full max-w-[800px] mx-auto bg-gray-100 dark:bg-black-900 hide-scrollbar">
      <div className="font-inter py-4 px-6 text-gray-800 dark:text-gray-100 text-lg font-semibold bg-white dark:bg-gray-800">
        SrikanthGPT
      </div>
      {/* Chat Messages */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 bg-white dark:bg-gray-800 hide-scrollbar"
      >
        {messages.map((msg) => (
          <MessageBubble key={msg.id} text={msg.text} sender={msg.sender} />
        ))}
      </div>
      {/* Input Area */}
      <div className="p-4 bg-white dark:bg-gray-800 flex items-center gap-4">
        <button className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
          <FiPaperclip size={20} />
        </button>
        <input
          type="text"
          placeholder="Message SrikanthGPT..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          className="flex-1 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none shadow-md"
        />
        <button
          onClick={handleSendMessage}
          className="text-black hover:text-gray-700 dark:hover:text-white p-2"
          disabled={loading}
        >
          <HiArrowUpCircle size={45} />
        </button>
      </div>
    </div>
  );
}