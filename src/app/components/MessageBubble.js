

export default function MessageBubble({ text, sender }) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex items-start gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`} // Adjust horizontal spacing
    >
      {/* Bot Icon */}
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center text-xs font-sans">
        GPT
      </div> 
      )}

      {/* Message Bubble */}
      <div
        className={`rounded-3xl px-4 py-3 max-w-md text- leading-relaxed ${
          isUser
            ? "bg-gray-100 text-gray-800" // User message styling
            : "bg-white text-gray-700" // Bot message styling
        }`}
      >
        {text}
      </div>

      
    </div>
  );
}
