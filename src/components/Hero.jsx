import React from "react";
import { FiDownload } from "react-icons/fi";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <section className="min-h-[60vh] py-20  ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <p className="mb-4 text-black">Hello world! I'm</p>
            <h1 className="text-5xl text-center md:text-7xl font-bold bg-linear-to-r from-purple-400 to-purple-900 text-transparent bg-clip-text mb-4">
              Shajida Islam
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

            {/* Download Button */}
            <button
              className="btn btn-outline 
            btn-sm border-purple-500 text-purple-600
             hover:bg-purple-600 hover:text-white flex items-center gap-2"
            >
              <FiDownload />
              Resume
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-background-light dark:border-background-dark">
              <img
                src="https://images.unsplash.com/photo-1464863979621-258859e62245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmwlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
