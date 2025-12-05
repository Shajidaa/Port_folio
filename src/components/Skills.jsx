import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
} from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

const skills = [
  { 
    name: "React.js", 
    icon: FaReact, 
    level: 85,
    color: "#61DAFB",
    bgGradient: "from-[#61DAFB]/10 to-[#61DAFB]/5"
  },
  { 
    name: "JavaScript", 
    icon: SiJavascript, 
    level: 90,
    color: "#F7DF1E",
    bgGradient: "from-[#F7DF1E]/10 to-[#F7DF1E]/5"
  },
  { 
    name: "Node.js", 
    icon: FaNodeJs, 
    level: 80,
    color: "#339933",
    bgGradient: "from-[#339933]/10 to-[#339933]/5"
  },
  { 
    name: "MongoDB", 
    icon: SiMongodb, 
    level: 75,
    color: "#47A248",
    bgGradient: "from-[#47A248]/10 to-[#47A248]/5"
  },
  { 
    name: "Next.js", 
    icon: SiNextdotjs, 
    level: 75,
    color: "#000000",
    bgGradient: "from-gray-900/10 to-gray-900/5"
  },
  { 
    name: "Express.js", 
    icon: SiExpress, 
    level: 70,
    color: "#000000",
    bgGradient: "from-gray-800/10 to-gray-800/5"
  },
  { 
    name: "Tailwind CSS", 
    icon: SiTailwindcss, 
    level: 95,
    color: "#06B6D4",
    bgGradient: "from-[#06B6D4]/10 to-[#06B6D4]/5"
  },
  { 
    name: "HTML & CSS", 
    icon: FaHtml5, 
    level: 95,
    color: "#E34F26",
    bgGradient: "from-[#E34F26]/10 to-[#E34F26]/5"
  },
  { 
    name: "Git & GitHub", 
    icon: FaGitAlt, 
    level: 85,
    color: "#F05032",
    bgGradient: "from-[#F05032]/10 to-[#F05032]/5"
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
            <span className="font-semibold text-sm text-purple-600">My Skills</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-purple-400 to-purple-900 text-transparent bg-clip-text mb-4">
            Design, develop, deliver: my <span className="text-purple-600">essential gear</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          {skills.map((skill, idx) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group bg-white p-6 rounded-xl border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                style={{
                  "--skill-color": skill.color,
                }}
              >
                {/* Hover Background Effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${skill.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.15 }}
                        transition={{ duration: 0.6 }}
                        className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 group-hover:from-white group-hover:to-white group-hover:shadow-lg transition-all duration-300"
                      >
                        <IconComponent 
                          className="text-4xl transition-all duration-300" 
                          style={{ color: skill.color }}
                        />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 group-hover:font-extrabold transition-all duration-300">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                          Proficiency
                        </p>
                      </div>
                    </div>
                    <motion.span 
                      className="text-2xl font-bold text-purple-600 transition-all duration-300"
                      style={{
                        color: "var(--skill-color)"
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-100 group-hover:bg-white rounded-full h-3 overflow-hidden shadow-inner transition-all duration-300">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        background: `linear-gradient(to right, ${skill.color}, ${skill.color}dd)`
                      }}
                    ></motion.div>
                  </div>
                </div>

                {/* Border Glow Effect on Hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: `0 0 20px ${skill.color}40`
                  }}
                ></div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
