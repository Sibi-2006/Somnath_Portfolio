import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Book from "./Book";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="terminal-panel min-h-screen">
      <div className="panel-inner">
        <Header />
        <main className="scroll-smooth">
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="experience"><Experience /></section>
          <section id="education"><Education /></section>
          <section id="skills"><Skills /></section>
          <section id="book"><Book /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
