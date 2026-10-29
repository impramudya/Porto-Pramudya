import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Work from "./components/work/Work";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
