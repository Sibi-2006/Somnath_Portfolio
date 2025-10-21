import React from "react";
import richDad from "./Images/richDad.jpg";
import ikagai from "./Images/ikagai.jpg";
import subconsciousMind from "./Images/subconsciousMind.jpg";
import aloneBook from "./Images/aloneBook.jpg";
import DontTalk from "./Images/DontTalk.jpg";
import emoction from "./Images/emoctionBook.jpg";
import moneyBook from "./Images/moneyBook.jpg";
import Dopamine from "./Images/Dopamine.jpg";
import alchemist from "./Images/alchemist.jpg";
import habitBook from "./Images/habitbook.jpg";

const books = [
  { img: richDad, title: "Rich Dad Poor Dad" },
  { img: ikagai, title: "Ikigai" },
  { img: subconsciousMind, title: "The Subconscious Mind" },
  { img: aloneBook, title: "Alone" },
  { img: DontTalk, title: "Don't Talk" },
  { img: emoction, title: "Emotion" },
  { img: moneyBook, title: "Money" },
  { img: Dopamine, title: "Dopamine" },
  { img: alchemist, title: "The Alchemist" },
  { img: habitBook, title: "Atomic Habits" },
];

export default function Book() {
  return (
    <div id="book" className="mainframe p-4">
      <h1 className="title text-center">
        Books <span className="caret" />
      </h1>

      <div
        className="
        grid 
        gap-3 
        p-4
        grid-cols-3
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        place-items-center"
      >
        {books.map((book, index) => (
          <div
            key={index}
            className="w-full md:w-3/4 aspect-[3/4] border border-green-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={book.img}
              alt={book.title}
              className="w-full h-full  object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
