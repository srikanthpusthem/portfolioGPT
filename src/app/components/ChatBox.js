"use client";

import { useState, useRef, useEffect } from "react";
import { FiArrowUpCircle } from "react-icons/fi";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi, I’m SrikanthGPT! 👋 How can I assist you today?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || loading) return;

    const currentInput = input.trim();
    setLoading(true);

    // User message
    const userMessage = {
      id: Date.now(),
      text: currentInput,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // “Thinking” indicator from bot
    const thinkingIndicator = {
      id: Date.now() + 1,
      text: "SrikanthGPT is thinking...",
      sender: "bot",
      thinking: true,
    };
    setMessages((prev) => [...prev, thinkingIndicator]);

    try {
      // Call your backend endpoint
      const response = await fetch("http://localhost:8000/chat_hf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: currentInput }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // Remove thinking indicator & append the bot's answer
      setMessages((prev) => {
        const updated = prev.filter((msg) => !msg.thinking);
        return [
          ...updated,
          {
            id: Date.now() + 2,
            text: data.answer,
            sender: "bot",
          },
        ];
      });
    } catch (error) {
      console.error("Error fetching chat response:", error);
      setMessages((prev) => {
        const updated = prev.filter((msg) => !msg.thinking);
        return [
          ...updated,
          {
            id: Date.now() + 2,
            text: "Sorry, something went wrong.",
            sender: "bot",
          },
        ];
      });
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center h-screen w-full dark:bg-gray-900 bg-gray-50 text-gray-800 dark:text-gray-100">
      {/* Main chat container, limited width */}
      <div className="w-full max-w-2xl h-full flex flex-col">
        
        {/* Messages scroll area */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4"
        >
          {messages.map((msg) => {
            const isUser = msg.sender === "user";
            const isThinking = msg.thinking;

            return (
              <div
                key={msg.id}
                className={`flex ${isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`
                    whitespace-pre-wrap max-w-[80%]
                    ${isUser ? "bg-blue-500 text-white" : ""}
                    ${isThinking ? "italic text-gray-400" : ""}
                    rounded-2xl px-4 py-2
                  `}
                >
                  {msg.text}
                </div>
              </div>
            );
          })}
        </div>

        {/* Input bar pinned at the bottom */}
        <div className="sticky bottom-0 border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-3">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              disabled={loading}
              className="
                flex-1 rounded-full px-4 py-2
                bg-gray-200 dark:bg-gray-800
                text-gray-900 dark:text-gray-100
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
            />
            <button
              onClick={handleSendMessage}
              disabled={loading}
              className="
                text-blue-500 dark:text-blue-400
                hover:text-blue-600 dark:hover:text-blue-300
                transition-colors
              "
              aria-label="Send message"
            >
              <FiArrowUpCircle size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}