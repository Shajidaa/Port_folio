import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import EducationTimeline from "../components/Education";
import Projects from "../components/Projects";
import ScrollToTop from "../components/ScrollToTop";
import CustomCursor from "../components/CustomCursor";
import { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <div>
      <CustomCursor />
      <Toaster />
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <EducationTimeline></EducationTimeline>
      <Projects></Projects>
      <Contact></Contact>
      <ScrollToTop></ScrollToTop>
    </div>
  );
};

export default Home;
