import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Services from "../components/Services";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <>
      <Navbar />
      <ThemeToggle />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}