"use client";

import axios from "axios";
import { useState } from "react";
import { Send, MessageCircle, X } from "lucide-react";

interface ChatMessage {
  type: "user" | "bot";
  content: string;
}

interface ChatBotProps {
  onClose?: () => void;
}

const ChatBot = ({ onClose }: ChatBotProps) => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    if (!query.trim()) return;

    setMessages((prev: ChatMessage[]) => [
      ...prev,
      { type: "user", content: query },
    ]);
    const userQuery = query;
    setQuery("");

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/chat", {
        query: userQuery,
      });
      setMessages((prev: ChatMessage[]) => [
        ...prev,
        { type: "bot", content: res.data.response },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev: ChatMessage[]) => [
        ...prev,
        {
          type: "bot",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    }
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50"> {/* Changed from left-4 to right-4 */}
      <div className="bg-white rounded-lg shadow-xl w-80 flex flex-col" style={{ height: '500px' }}>
        <div className="bg-blue-500 p-3 rounded-t-lg flex justify-between items-center">
          <h1 className="text-lg font-bold text-white">Edu Sparsh Chat Bot</h1>
          <button 
            onClick={onClose}  // Use the onClose prop
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.type === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-blue-300 text-gray-800"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-blue-300 rounded-lg p-3 max-w-[70%]">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="border-t p-3 bg-white rounded-b-lg">
            <div className="flex space-x-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-blue-300"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ChatBot;