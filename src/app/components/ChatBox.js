import { useState, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import { FiPaperclip, FiSend } from "react-icons/fi";
import { HiArrowUpCircle } from "react-icons/hi2"
 // Attach and Send Icons

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi, I’m SrikanthGPT! 👋 How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text: input, sender: "user" },
      ]);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { id: Date.now() + 1, text: "This is a mock response 🚀", sender: "bot" },
        ]);
      }, 1000);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-screen w-full max-w-[800] mx-auto bg-gray-100 dark:bg-black-900">
      <div className="font-inter py-4 px-6 text-gray-800 dark:text-gray-100 text-lg font-semibold bg-white dark:bg-gray-800">
        SrikanthGPT
      </div>
      {/* Messages */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 bg-white dark:bg-gray-800"
      >
        {messages.map((msg) => (
          <MessageBubble key={msg.id} text={msg.text} sender={msg.sender} />
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-white dark:bg-gray-800 flex items-center gap-4">
        <button className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
          <FiPaperclip size={20} />
        </button>
        <input
          type="text"
          placeholder="Message SrikanthGPT..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          className="flex-1 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none shadow-md"
        />
        <button
          onClick={handleSendMessage}
          className="text-black-500 hover:text-gray-700 dark:hover:text-white p-2"
        >
          <HiArrowUpCircle size={45} />
        </button>
      </div>
    </div>
  );
}
