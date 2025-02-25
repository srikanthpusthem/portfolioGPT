"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";

export default function Page() {
  const [userInput, setUserInput] = useState("");
  const router = useRouter();

  const suggestions = [
    "Show me your recent projects",
    "What technologies do you specialize in?",
    "How do you approach problem-solving?",
    "Tell me about your experience",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, simply navigate to the /chat page
    router.push("/chat");
  };

  return (
    <section
      className="
        flex flex-col items-center justify-center
        w-full
        min-h-[calc(100vh-4rem)]
        text-center
        px-6
      "
    >
      {/* Hero Heading */}
      <h1
        className="
          text-4xl sm:text-5xl font-extrabold 
          text-transparent bg-clip-text
          bg-gradient-to-r from-blue-400 to-green-400
          mb-6
        "
      >
        What can I help with?
      </h1>

      {/* Minimal Chat Prompt Form */}
      <form
        onSubmit={handleSubmit}
        className="
          flex items-center gap-2
          bg-white/5 backdrop-blur-md
          p-3 rounded-full
          w-full max-w-xl
          shadow-sm
        "
      >
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask anything"
          className="
            flex-grow bg-transparent
            text-white placeholder-gray-300
            focus:outline-none
            p-2
          "
        />
        <button
          type="submit"
          className="
            p-2 rounded-full
            hover:bg-white/10
            transition-colors
          "
          aria-label="Submit question"
        >
          <FiArrowRight className="text-white w-5 h-5" />
        </button>
      </form>

      {/* Suggestion Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mt-8">
        {suggestions.map((text, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setUserInput(text)}
            className="
              px-4 py-2 rounded-full
              bg-white/5 text-white
              hover:bg-white/10
              transition-colors
              backdrop-blur-md
              border border-white/10
            "
          >
            {text}
          </button>
        ))}
      </div>
    </section>
  );
}