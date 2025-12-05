import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router";
import Typewriter from "typewriter-effect";
import toast from "react-hot-toast";

const Hero = () => {
  const handleResumeClick = () => {
    toast.success("Resume download started! 📄", {
      duration: 3000,
      position: "top-center",
      style: {
        background: "#9333ea",
        color: "#fff",
        padding: "16px",
        borderRadius: "10px",
        fontSize: "16px",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#9333ea",
      },
    });
  };

  return (
    <section id="home" className="min-h-[60vh] py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <p className="mb-4 text-black">Hello world! I'm</p>
            <h1 className="text-5xl text-center md:text-7xl font-bold bg-linear-to-r from-purple-400 to-purple-900 text-transparent bg-clip-text mb-4">
              Shajida Akter Lopa
            </h1>
            <h2 className="text-4xl text-center md:text-6xl font-normal text-purple-300 mb-6">
              <Typewriter
                options={{
                  strings: [
                    "MERN Web developer",
                    "Frontend Developer",
                    "Web Developer",
                    "Full Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>

            <p className="text-base text-gray-500 md:text-lg max-w-md mx-auto lg:mx-0 mb-8">
              From UI design to fully functional web components — I enjoy
              turning ideas into interactive digital experiences.
            </p>
            {/* Social Icons */}
            <div className="hidden md:flex gap-4 mb-5 text-xl text-gray-500">
              <a
                href="https://github.com/Shajidaa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/shajida-akter-lopa/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
            {/* Download Button */}
            <a
              href="https://drive.google.com/uc?export=download&id=19AytXCcQ9LebUKAEHFxeLbOOQy-chz85"
              download
              onClick={handleResumeClick}
              className="btn btn-outline 
            btn-sm border-purple-500 text-purple-600
             hover:bg-purple-600 hover:text-white flex items-center gap-2"
            >
              <FiDownload />
              Resume
            </a>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-background-light dark:border-background-dark">
              <img
                src="https://i.ibb.co.com/BHLGzGxr/8744393d-9043-4b37-9bca-527ec42c616b-removebg-preview.png"
                alt="Profile"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
