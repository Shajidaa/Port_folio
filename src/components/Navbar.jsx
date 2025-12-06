import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  // Track active section based on scroll position
  useEffect(() => {
    // Only track on home page
    if (location.pathname !== "/") return;

    const sections = ["home", "about", "skills", "education", "projects", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleResumeClick = () => {
    window.open("https://drive.google.com/uc?export=download&id=19AytXCcQ9LebUKAEHFxeLbOOQy-chz85", "_blank");
  };

  const navItems = (
    <>
      <li>
        <a
          onClick={() => scrollToSection("home")}
          className={`cursor-pointer transition-all ${
            activeSection === "home" 
              ? "bg-gradient-to-r from-purple-600 to-purple-900 text-transparent bg-clip-text font-semibold" 
              : "text-gray-600 hover:text-purple-600"
          }`}
        >
          Home
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollToSection("about")}
          className={`cursor-pointer transition-all ${
            activeSection === "about" 
              ? "bg-gradient-to-r from-purple-600 to-purple-900 text-transparent bg-clip-text font-semibold" 
              : "text-gray-600 hover:text-purple-600"
          }`}
        >
          About
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollToSection("skills")}
          className={`cursor-pointer transition-all ${
            activeSection === "skills" 
              ? "bg-gradient-to-r from-purple-600 to-purple-900 text-transparent bg-clip-text font-semibold" 
              : "text-gray-600 hover:text-purple-600"
          }`}
        >
          Skills
      
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollToSection("projects")}
          className={`cursor-pointer transition-all ${
            activeSection === "projects" 
              ? "bg-gradient-to-r from-purple-600 to-purple-900 text-transparent bg-clip-text font-semibold" 
              : "text-gray-600 hover:text-purple-600"
          }`}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollToSection("contact")}
          className={`cursor-pointer transition-all ${
            activeSection === "contact" 
              ? "bg-gradient-to-r from-purple-600 to-purple-900 text-transparent bg-clip-text font-semibold" 
              : "text-gray-600 hover:text-purple-600"
          }`}
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <nav className="bg-white shadow-sm w-full sticky top-0 z-50">
      <div className="navbar container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Logo */}
        <div className="navbar-start">
          <button 
            onClick={() => scrollToSection("home")}
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-900 text-transparent bg-clip-text cursor-pointer"
          >
            Portfolio
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-end hidden lg:flex items-center gap-4">
          <ul className="menu menu-horizontal px-1 gap-3">{navItems}</ul>
          <button
            onClick={handleResumeClick}
            className="btn btn-outline btn-sm border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white"
          >
            Resume
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="navbar-end lg:hidden flex items-center gap-2">
          {/* Mobile Dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
              ☰
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white shadow rounded-box w-52 mt-3 p-2"
            >
              {navItems}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
