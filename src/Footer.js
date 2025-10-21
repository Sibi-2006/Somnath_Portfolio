import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black/90 text-green-400 border-t border-green-800 py-6 mt-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <p className="text-sm text-center sm:text-left font-mono">
          © {new Date().getFullYear()} Somnath.R — All Rights Reserved.
        </p>

        
        <ul className="flex gap-5 text-sm font-mono">
          {["Home", "About", "Education", "Experience", "Book"].map((link, i) => (
            <li key={i}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-green-300 transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        
        <div className="flex gap-5 text-2xl">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
