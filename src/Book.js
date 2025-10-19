import React   from 'react';
import richDad from "./Images/richDad.jpg";
import ikagai  from "./Images/ikagai.jpg";
import subconsciousMind from "./Images/subconsciousMind.jpg";
import aloneBook from "./Images/aloneBook.jpg";
import DontTalk  from "./Images/DontTalk.jpg";
import emoction  from "./Images/emoctionBook.jpg";
import moneyBook from "./Images/moneyBook.jpg";
import Dopamine  from "./Images/Dopamine.jpg";
import alchemist from "./Images/alchemist.jpg";
import habitBook from "./Images/habitbook.jpg";

const books = [
  { 
    img: richDad, 
    title: "Rich Dad Poor Dad", 
    content: "" 
    },
  { 
    img: ikagai,
    title: "Ikigai", 
    content: "" 
    },
  { 
    img: subconsciousMind, 
    title: "The Subconscious Mind", 
    content: "" },
  { 
    img: aloneBook, 
    title: "Alone", 
    content: ""
    },
  { 
    img: DontTalk, 
    title: "Don't Talk", 
    content: "" 
    },
  { 
    img: emoction, 
    title: "Emotion", 
    content: "" 
    },
  { 
    img: moneyBook,
    title: "", 
    content: "" 
    },
  { 
    img: Dopamine, 
    title: "Dopamine", 
    content: "" 
    },
  { 
    img: alchemist, 
    title: "The Alchemist", 
    content: "" 
    },
  { 
    img: habitBook, 
    title: "Atomic Habits", 
    content: "Atomic Habits by James Clear teaches how tiny, consistent changes can lead to remarkable results over time. The book emphasizes focusing on systems instead of just goals, showing that identity-based habits—changing who you believe you are—are key to lasting transformation. Clear explains the 4-step habit loop: cue, craving, response, and reward, and highlights how small improvements, even 1% better each day, accumulate into massive progress. By designing your environment to make good habits easy and bad habits difficult, tracking progress, and celebrating small wins, anyone can build powerful routines that transform their life.Atomic Habits by James Clear teaches how tiny, consistent changes can lead to remarkable results over time. The book emphasizes focusing on systems instead of just goals, showing that identity-based habits—changing who you believe you are—are key to lasting transformation. Clear explains the 4-step habit loop: cue, craving, response, and reward, and highlights how small improvements, even 1% better each day, accumulate into massive progress. By designing your environment to make good habits easy and bad habits difficult, tracking progress, and celebrating small wins, anyone can build powerful routines that transform their life." 
    },
];
export default function Book() {
  return (
    <div id="book">
        <h1 className=' title text-center'> Books</h1>

            <div className="main-con grid gap-6 p-6 
               
                sm:grid-cols-2 
                md:grid-cols-4 
                lg:grid-cols-4 
                xl:grid-cols-4">

        
        {books.map((book, index) => (
        <div key={index} className="book-card group">
            <div className="card-inner">
            {/* Front */}
            <img
                src={book.img}
                alt={book.title}
                className="card-front"
            />
            {/* Back */}
            <div className="card-back">
                <h2 className="text-lg font-bold mb-2">{book.title}</h2>
                <p className="text-sm overflow-y-auto">{book.content}</p>
            </div>
            </div>
        </div>
        ))}


        </div>
    </div>
    


  );
}
