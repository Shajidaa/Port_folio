import { Link, NavLink } from "react-router";
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-purple-500 font-semibold" : "text-gray-600"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-purple-500 font-semibold" : "text-gray-600"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-purple-500 font-semibold" : "text-gray-600"
          }
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "text-purple-500 font-semibold" : "text-gray-600"
          }
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-purple-500 font-semibold" : "text-gray-600"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="navbar container mx-auto">
        {/* Logo */}
        <div className="navbar-start">
          <a className="text-2xl font-bold text-purple-600">Portfolio</a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">{navItems}</ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end flex items-center gap-4">
          {/* Social Icons */}
          <div className="hidden md:flex gap-4 text-xl text-gray-500">
            <Link
              to="https://github.com/Shajidaa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <FaGithub />
            </Link>
            <Link
              to="https://www.linkedin.com/in/shajida-akter-lopa/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="mailto:shajidaislam34@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <FaEnvelope />
            </Link>
          </div>

          {/* Download Button */}
          {/* <button className="btn btn-outline btn-sm border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white flex items-center gap-2">
            <FiDownload />
            Download CV
          </button> */}

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
