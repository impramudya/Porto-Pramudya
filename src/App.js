import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Work from "./components/work/Work";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <Work />
        <Skills />
        <About />
        <Education />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
