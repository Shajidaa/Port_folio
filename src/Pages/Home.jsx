import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import EducationTimeline from "../components/Education";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <EducationTimeline />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
