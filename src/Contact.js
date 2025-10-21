import React, { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState({ text: "" });

  const handleChange = (e) => {
    setMessage((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-5">
      {/* Mainframe Panel */}
      <div className="flex flex-col items-center p-10 rounded-3xl border-2 border-green-400 shadow-2xl shadow-green-500/50 bg-gray-900/80 backdrop-blur-lg w-full max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-8 tracking-wider">
          Contact <span className="text-green-500 animate-pulse">💬</span>
        </h1>

        <form className="flex flex-col gap-6 w-full">
          <label htmlFor="text" className="text-lg font-semibold text-green-300">
            Message :
          </label>

          <input
            type="text"
            id="text"
            name="text"
            placeholder="Type your message..."
            value={message.text}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-green-500 rounded-xl bg-gray-800 text-green-200 placeholder-green-500 focus:ring-2 focus:ring-green-400 focus:outline-none transition-all duration-200"
          />

          <a
            href={`https://wa.me/9360293815?text=${encodeURIComponent(
              message.text
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl shadow-md shadow-green-400/50 hover:shadow-green-500/70 transition-all duration-300"
          >
            Message me on WhatsApp
          </a>
        </form>
      </div>

    </div>
  );
}
