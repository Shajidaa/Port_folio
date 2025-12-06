import { FaGithub, FaLinkedin, FaFacebookF, FaHeart } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-purple-50 to-white border-t border-purple-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-900 text-transparent bg-clip-text mb-4">
              Portfolio
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              MERN Stack Developer passionate about creating beautiful and functional web applications.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/Shajidaa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-purple-100 hover:bg-purple-600 hover:text-white text-purple-600 rounded-full transition-all hover:scale-110"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shajida-akter-lopa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-purple-100 hover:bg-purple-600 hover:text-white text-purple-600 rounded-full transition-all hover:scale-110"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61564677698432"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-purple-100 hover:bg-purple-600 hover:text-white text-purple-600 rounded-full transition-all hover:scale-110"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-purple-900 text-transparent bg-clip-text mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-purple-900 text-transparent bg-clip-text mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="mailto:shajidaislam34@gmail.com"
                  className="hover:text-purple-600 transition-colors"
                >
                  shajidaislam34@gmail.com
                </a>
              </li>
              <li>Narayanganj, Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-100 pt-8 text-center">
          <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
            © {currentYear} Made with <FaHeart className="text-purple-600" /> by Shajida Akter Lopa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
