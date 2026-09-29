import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Ventures from "./components/Ventures";
import Vision from "./components/Vision";
import TechStackMarquee from "./components/TechStackMarquee";
import Press from "./components/Press";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ventures />
        <Vision />
        <TechStackMarquee />
        <Press />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
