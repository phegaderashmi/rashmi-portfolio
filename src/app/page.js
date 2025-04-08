import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/skills";
import Experience from "../components/Experience";
import Certificate from "../components/Certificate";
import Extracurricular from "../components/Extracurricular";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certificate />
      <Extracurricular />
      <Contact />
    </>
  );
}
