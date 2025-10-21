import Header from "./Header";
import Experience from "./Experience";
import Home from "./Home";
import Skills from "./Skills";
import About from "./About";
import Book from "./Book";
import Education from "./Education";
import Footer from "./Footer";
import Contact from "./Contact";

function App() {
  return (
    <div className="terminal-panel min-h-screen">
      <div className="panel-inner">
        <Header />
        <main>
          <Home/>
          <About/>
          <Experience />
          <Education />
          <Skills/>
          <Book />
          <Contact />
          <Footer/>
        </main>
      </div>
    </div>
  );
}

export default App;
