import { useParams, Link } from "react-router";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode, FaLightbulb, FaRocket } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    image: "https://i.ibb.co.com/XfmTGMR8/Screenshot-2025-12-05-084646.jpg",
    title: "Bill Management App",
    description:
      "PayUp is a modern, responsive, and user-friendly billing management platform designed to simplify payment tracking and management. It provides users with an intuitive interface to manage their bills, track payments, and stay organized with their financial obligations.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    type: "Full Stack",
    github: "https://github.com/Shajidaa/Utility-Bill-Management-System-Client",
    live: "https://payup-1204c.web.app/",
    techStack: [
      { name: "React", purpose: "Frontend framework for building interactive UI" },
      { name: "Node.js", purpose: "Backend runtime environment" },
      { name: "Express", purpose: "Web application framework" },
      { name: "MongoDB", purpose: "NoSQL database for data storage" },
      { name: "Tailwind CSS", purpose: "Utility-first CSS framework" },
    ],
    challenges: [
      "Implementing real-time payment tracking and notifications",
      "Designing a secure authentication system for user data protection",
      "Creating an intuitive dashboard for managing multiple bills",
      "Optimizing database queries for faster data retrieval",
    ],
    improvements: [
      "Add automated bill payment reminders via email/SMS",
      "Implement data visualization with charts and graphs",
      "Add support for multiple currencies",
      "Create a mobile application version",
      "Integrate with popular payment gateways",
    ],
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/NnN6xbSp/Screenshot-2025-12-05-085400.jpg",
    title: "Toy E-commerce App",
    description:
      "Toytopia is a comprehensive e-commerce platform dedicated to toys, offering a delightful shopping experience for parents and children. The platform features a wide range of toys with detailed descriptions, user reviews, and secure checkout process.",
    tags: ["React", "Firebase", "Daisy UI", "React Router"],
    type: "Full Stack",
    github: "https://github.com/Shajidaa/Toytopia",
    live: "https://toytopia-98c6a.web.app/",
    techStack: [
      { name: "React", purpose: "Frontend library for building UI components" },
      { name: "Firebase", purpose: "Backend services including authentication and database" },
      { name: "Daisy UI", purpose: "Component library built on Tailwind CSS" },
      { name: "React Router", purpose: "Client-side routing" },
    ],
    challenges: [
      "Managing complex product filtering and search functionality",
      "Implementing Firebase authentication with multiple providers",
      "Creating a responsive shopping cart with persistent state",
      "Handling image optimization for faster page loads",
    ],
    improvements: [
      "Add product recommendation system based on user preferences",
      "Implement wishlist functionality",
      "Add product comparison feature",
      "Create an admin dashboard for inventory management",
      "Integrate customer review and rating system",
    ],
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/DDMDqD6V/Screenshot-2025-12-05-090049.jpg",
    title: "Revoza",
    description:
      "Revoza is a modern, responsive, and user-friendly e-commerce platform designed to deliver a smooth and interactive shopping experience. Built with Next.js for optimal performance and SEO, it offers a seamless shopping journey from browsing to checkout.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind CSS"],
    type: "Full Stack",
    github: "https://github.com/Shajidaa/Revoza",
    live: "https://revoza.vercel.app/",
    techStack: [
      { name: "Next.js", purpose: "React framework with SSR and SSG capabilities" },
      { name: "React", purpose: "UI library for component-based architecture" },
      { name: "MongoDB", purpose: "Database for storing product and user data" },
      { name: "Tailwind CSS", purpose: "Styling and responsive design" },
    ],
    challenges: [
      "Implementing server-side rendering for better SEO performance",
      "Managing state across multiple pages and components",
      "Creating a scalable product catalog structure",
      "Optimizing images and assets for faster load times",
    ],
    improvements: [
      "Add advanced search with filters and sorting options",
      "Implement user authentication and profile management",
      "Create a seller dashboard for product management",
      "Add real-time inventory tracking",
      "Integrate analytics for tracking user behavior",
    ],
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-4">Project Not Found</h2>
          <Link to="/" className="text-purple-500 hover:underline">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-purple-600 hover:text-purple-700 mb-6 sm:mb-8 transition-colors"
        >
          <FaArrowLeft />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-purple-400 to-purple-900 text-transparent bg-clip-text mb-3 sm:mb-4">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-4 sm:mb-6">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm font-medium py-1 px-3 rounded-full bg-purple-100 text-purple-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base"
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors text-sm sm:text-base"
            >
              <FaGithub />
              <span>View Code</span>
            </a>
          </div>
        </div>

        {/* Project Image */}
        <div className="mb-8 sm:mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg"
          />
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <FaCode className="text-xl sm:text-2xl text-purple-600" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600">
              Technology Stack
            </h2>
          </div>
          <div className="divider my-3 sm:my-4 before:bg-purple-200 after:bg-purple-200"></div>
          <div className="space-y-3 sm:space-y-4">
            {project.techStack.map((tech, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                <h3 className="text-base sm:text-lg font-semibold text-purple-600 min-w-[120px]">
                  {tech.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{tech.purpose}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <FaLightbulb className="text-xl sm:text-2xl text-purple-600" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600">
              Challenges Faced
            </h2>
          </div>
          <div className="divider my-3 sm:my-4 before:bg-purple-200 after:bg-purple-200"></div>
          <ul className="space-y-3 sm:space-y-4">
            {project.challenges.map((challenge, index) => (
              <li key={index} className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                <span className="text-purple-600 font-bold text-base sm:text-lg flex-shrink-0">
                  {index + 1}.
                </span>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">{challenge}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Future Improvements */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <FaRocket className="text-xl sm:text-2xl text-purple-600" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600">
              Future Improvements
            </h2>
          </div>
          <div className="divider my-3 sm:my-4 before:bg-purple-200 after:bg-purple-200"></div>
          <ul className="space-y-3 sm:space-y-4">
            {project.improvements.map((improvement, index) => (
              <li key={index} className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                <span className="text-purple-600 font-bold text-base sm:text-lg flex-shrink-0">
                  {index + 1}.
                </span>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">{improvement}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
