"use client";
import { useState } from "react";
import ChatBox from "../app/components/ChatBox";

export default function Home() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="h-full w-full flex flex-col bg-white dark:bg-black-900">
      {/* Header */}
       
      {showChat ? (
        // Show the chat interface
        <ChatBox />
      ) : (
        // Welcome Section
        <div className="flex-1 flex items-center justify-center p-10 bg-white">
          <div className="text-center space-y-6 max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100">
              Welcome to Srikanth's portfolio 🚀
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m SrikanthGPT, here to showcase my projects, skills, and experience.
              <br />
              How can I assist you today?
            </p>
            <button
              onClick={() => setShowChat(true)}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300"
            >
               More about Srikanth
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
