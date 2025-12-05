import { FaTools, FaLaptopCode, FaServer } from "react-icons/fa";

const SkillBar = ({ label, value }) => (
  <div className="mb-3 sm:mb-4">
    <div className="flex justify-between mb-1 sm:mb-2">
      <span className="text-xs sm:text-sm text-gray-600">{label}</span>
      <span className="text-xs sm:text-sm font-semibold text-purple-600">{value}%</span>
    </div>
    <div className="w-full h-2 rounded-lg bg-gray-200">
      <div
        className="h-2 rounded-lg transition-all duration-500 bg-purple-600"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-purple-400 to-purple-900 text-transparent bg-clip-text mb-3 sm:mb-4">
            My Skills
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto px-4">
            Here are some of the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              title: "Frontend Development",
              icon: FaLaptopCode,
              skills: [
                { label: "React", value: 90 },
                { label: "JavaScript", value: 85 },
                { label: "HTML / CSS", value: 95 },
                { label: "Tailwind CSS", value: 88 },
                { label: "Next.js", value: 80 },
              ],
            },
            {
              title: "Backend Development",
              icon: FaServer,
              skills: [
                { label: "Node.js", value: 85 },
                { label: "Express.js", value: 82 },
                { label: "MongoDB", value: 78 },
                { label: "REST APIs", value: 88 },
                { label: "Firebase", value: 75 },
              ],
            },
            {
              title: "Tools & Technologies",
              icon: FaTools,
              skills: [
                { label: "Git & GitHub", value: 90 },
                { label: "VS Code", value: 95 },
                { label: "Figma", value: 70 },
                { label: "Vite", value: 88 },
              ],
            },
          ].map((category) => (
            <div
              key={category.title}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-purple-100 rounded-lg">
                  <category.icon className="text-lg sm:text-xl md:text-2xl text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-600">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.label} label={skill.label} value={skill.value} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
