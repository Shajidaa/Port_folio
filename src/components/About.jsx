import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
            <span className="font-semibold text-sm text-purple-600">About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-purple-400 to-purple-900 text-transparent bg-clip-text mb-3 sm:mb-4">
            About My Journey
          </h2>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200 mx-auto"
        >
          {/* Introduction Paragraph */}
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
            I'm Shajida Akter Lopa, a passionate <span className="font-semibold text-purple-600">MERN Stack Developer</span> who loves creating clean, functional, and user-friendly web applications. I always pay attention to the small details because I believe they make a big difference in the final product. I'm also a good listener, which helps me understand exactly what a project needs before I start building.
          </p>

         

          {/* Programming Journey Section */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-sm font-semibold text-purple-600 mb-3 sm:mb-4">
              My Development Journey
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              My coding journey began at Programming Hero, where I first learned HTML and CSS. Step by step, I explored the full MERN stack—MongoDB, Express, React, and Node.js—and slowly turned my curiosity into real skills. I consider myself a slow learner, but I use that to my advantage. My patience helps me learn deeply and build things the right way.
            </p>
          </div>

         

          {/* Hobbies Section */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-sm font-semibold text-purple-600 mb-3 sm:mb-4">
              Beyond Coding
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Outside of coding, I enjoy painting and gardening. These hobbies keep me creative and remind me to stay patient and consistent—qualities that I also bring to my development work. Whether I'm growing a plant, finishing a piece of code, I always give my best.
            </p>
          </div>

          {/* Call to Action */}
          <motion.a
            whileHover={{ x: 10 }}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center text-purple-600 font-semibold text-base sm:text-lg hover:text-purple-700 transition-colors duration-300 mt-4"
          >
            Ready to collaborate! 
            <span className="ml-2">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
