import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, fadeInUp } from "../utils/animations";

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
    <section id="home" className="min-h-[60vh] py-12 sm:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            className="flex flex-col justify-center items-center lg:justify-start lg:items-start"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-black"
            >
              Hello world! I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl text-center md:text-7xl font-bold bg-linear-to-r from-purple-400 to-purple-900 text-transparent bg-clip-text mb-4"
            >
              Shajida Akter Lopa
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-4xl text-center md:text-6xl font-normal text-purple-300 mb-6"
            >
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
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-base text-gray-500 md:text-lg max-w-md mx-auto lg:mx-0 mb-8"
            >
              From UI design to fully functional web components — I enjoy
              turning ideas into interactive digital experiences.
            </motion.p>
            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="hidden md:flex gap-4 mb-5 text-xl text-gray-500"
            >
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
            </motion.div>
            {/* Download Button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/uc?export=download&id=19AytXCcQ9LebUKAEHFxeLbOOQy-chz85"
              download
              onClick={handleResumeClick}
              className="btn btn-outline 
            btn-sm border-purple-500 text-purple-600
             hover:bg-purple-600 hover:text-white flex items-center gap-2"
            >
              <FiDownload />
              Resume
            </motion.a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-purple-300 shadow-xl shadow-purple-200"
            >
              <img
                src="https://i.ibb.co.com/BHLGzGxr/8744393d-9043-4b37-9bca-527ec42c616b-removebg-preview.png"
                alt="Profile"
                className="w-full h-full object-contain rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
