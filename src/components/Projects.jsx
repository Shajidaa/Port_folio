import { Link } from "react-router";

// --- Placeholder Project Data ---

const projectData = [
  {
    id: 1,
    image: "https://i.ibb.co.com/XfmTGMR8/Screenshot-2025-12-05-084646.jpg",
    title: "Bill Management App",
    description:
      "PayUp is a modern, responsive, and user-friendly billing management platform designed to simplify payment tracking and management.",
    tags: ["React", "Node.js", "MongoDB", "+2"],
    type: "Full Stack",
    github: "https://github.com/Shajidaa/Utility-Bill-Management-System-Client",
    live: "https://payup-1204c.web.app/",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/NnN6xbSp/Screenshot-2025-12-05-085400.jpg",
    title: "Toy E-commerce App",
    description:
      "Toytopia is a comprehensive e-commerce platform dedicated to toys, offering a delightful shopping experience.",
    tags: ["React", "Firebase", "Daisy UI", "+1"],
    type: "Full Stack",
    github: "https://github.com/Shajidaa/Toytopia",
    live: "https://toytopia-98c6a.web.app/",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/DDMDqD6V/Screenshot-2025-12-05-090049.jpg",
    title: "Revoza",
    description:
      "Revoza is a modern, responsive, and user-friendly e-commerce platform designed to deliver a smooth and interactive shopping experience.",
    tags: ["React", "Next.js", "MongoDB", "+1"],
    type: "Full Stack",
    github: "https://github.com/Shajidaa/Revoza",
    live: "https://revoza.vercel.app/",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col h-full border border-gray-100">
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3 sm:mb-4"
      />

      {project.isFeatured && (
        <span className="absolute top-2 right-2 sm:top-4 sm:right-4 text-xs font-semibold py-1 px-2 sm:px-3 rounded-full bg-purple-600 text-white">
          Featured
        </span>
      )}

      <h3 className="text-lg sm:text-xl font-bold text-purple-600 mb-2">
        {project.title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 grow line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs sm:text-sm font-medium py-1 px-2 sm:px-3 rounded-full bg-purple-100 text-purple-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        <Link
          to={`/project/${project.id}`}
          className="block w-full text-center text-white font-semibold py-2 sm:py-3 px-4 rounded-lg transition duration-300 bg-purple-600 hover:bg-purple-700 text-sm sm:text-base"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

// --- Main Projects Component ---
const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-purple-400 to-purple-900 text-transparent bg-clip-text mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto px-4">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
