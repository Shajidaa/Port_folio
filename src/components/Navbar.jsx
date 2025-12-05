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

  const navItems = (
    <>
      <li>
        <a
          onClick={() => scrollToSection("home")}
          className={`cursor-pointer ${
            activeSection === "home" ? "text-purple-500 font-semibold" : "text-gray-600"
          }`}
        >
          Home
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollToSection("about")}
          className={`cursor-pointer ${
            activeSection === "about" ? "text-purple-500 font-semibold" : "text-gray-600"
          }`}
        >
          About
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollToSection("skills")}
          className={`cursor-pointer ${
            activeSection === "skills" ? "text-purple-500 font-semibold" : "text-gray-600"
          }`}
        >
          Skills
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollToSection("education")}
          className={`cursor-pointer ${
            activeSection === "education" ? "text-purple-500 font-semibold" : "text-gray-600"
          }`}
        >
          Education
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollToSection("projects")}
          className={`cursor-pointer ${
            activeSection === "projects" ? "text-purple-500 font-semibold" : "text-gray-600"
          }`}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollToSection("contact")}
          className={`cursor-pointer ${
            activeSection === "contact" ? "text-purple-500 font-semibold" : "text-gray-600"
          }`}
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <nav className="bg-white shadow-sm w-full sticky top-0 z-50">
      <div className="navbar container mx-auto">
        {/* Logo */}
        <div className="navbar-start">
          <a className="text-2xl font-bold text-purple-600">Portfolio</a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-end  hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">{navItems}</ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end lg:hidden flex items-center gap-4">
          {/* Mobile Dropdown */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              ☰
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 shadow rounded-box w-52 mt-3"
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
