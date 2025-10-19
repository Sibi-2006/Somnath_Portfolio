import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Education", "Experience","Book"];

  const linkToId = (link) => {
    return link.toLowerCase();
  }

  useEffect(() => {
    const onHashChange = () => setIsOpen(false);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <header className='py-3 px-5 sm:px-10 bg-white shadow-md w-full z-50 fixed top-0'>
      <nav className='flex justify-between items-center'>
        <h1 className='text-blue-950 font-bold text-2xl'>
          Somnath.R
        </h1>

        <button
          className='sm:hidden text-3xl font-bold'
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>

      
        <ul className='hidden sm:flex flex-row gap-5'>
          {navLinks.map((link, idx) => (
            <li key={idx} className='cursor-pointer hover:text-blue-700'>
              <a href={`#${linkToId(link)}`} className='inline-block'>{link}</a>
            </li>
          ))}
        </ul>

        <button className='hidden sm:block bg-blue-950 text-white px-4 py-2 rounded-lg'>
          Hire me
        </button>
      </nav>

      <div className={`sm:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='bg-white w-3/4 h-full p-5 flex flex-col gap-5'>
          <button
            className='text-2xl font-bold self-end mb-5'
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
          {navLinks.map((link, idx) => (
            <li key={idx} className='list-none text-lg py-2 border-b cursor-pointer'>
              <a
                  href={`#${linkToId(link)}`}
                  onClick={() => setIsOpen(false)}
                  className='block'
                  aria-label={`Go to ${link}`}
                >
                  {link}
                </a>
            </li>
          ))}
          <button className='mt-5 bg-blue-950 text-white px-4 py-2 rounded-lg w-fit'>
            Hire me
          </button>
        </div>
      </div>
    </header>
  );
}

