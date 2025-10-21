import React, { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Education", "Experience", "Book"];

  const linkToId = (link) => link.toLowerCase();

  useEffect(() => {
    const onHashChange = () => setIsOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <header className="py-3 px-5 sm:px-10 w-full fixed top-0 left-0 bg-black/90 backdrop-blur-md z-[60]">
      <nav className="flex items-center justify-between h-full w-full">
        
        <h1 className="font-mono text-green-400 text-2xl font-bold">
          Somnath.R
        </h1>

        
        <button
          className="sm:hidden text-3xl font-bold text-green-400"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
        >
          &#9776;
        </button>

       
        <ul className="hidden sm:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <li key={idx} className="cursor-pointer">
              <a
                href={`#${linkToId(link)}`}
                className="inline-block font-mono text-green-400 hover:text-green-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        
        <button className="hidden sm:block px-4 py-2 rounded-lg border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition">
          Hire me
        </button>
      </nav>

    
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/95 z-[70] flex flex-col items-center justify-center transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
       
        <button
          className="absolute top-4 right-6 text-4xl font-bold text-green-400"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>

        
        <ul className="flex flex-col gap-6 text-xl text-center">
          {navLinks.map((link, idx) => (
            <li key={idx} onClick={() => setIsOpen(false)}>
              <a
                href={`#${linkToId(link)}`}
                className="block font-mono text-green-400 hover:text-green-300 transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        
        <div className="mt-10 w-3/4">
          <button className="w-full py-2 border border-green-400 rounded-lg text-green-400 hover:bg-green-400 hover:text-black transition">
            Hire me
          </button>
        </div>
      </div>
    </header>
  );
}
