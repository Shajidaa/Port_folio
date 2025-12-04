import React from "react";

const About = () => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4  grid grid-cols-1 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-lg md:text-xl mb-4">
            Hi! I'm{" "}
            <span className="font-semibold text-primary">Shajida Islam</span>, a
            passionate Frontend Web Developer. I specialize in creating modern,
            responsive, and interactive websites using technologies like{" "}
            <span className="font-semibold">
              React.js, Tailwind CSS, and JavaScript
            </span>
            . My goal is to build web experiences that are both user-friendly
            and visually engaging.
          </p>
          <p className="text-lg md:text-xl mb-4">
            I enjoy working on{" "}
            <span className="font-semibold">UI/UX design</span> projects,
            bringing ideas to life through clean and functional interfaces. I
            love challenges that push me to learn and improve, and I always
            strive for pixel-perfect implementation in every project I work on.
          </p>
          <p className="text-lg md:text-xl mb-4">
            Outside of coding, I’m passionate about{" "}
            <span className="font-semibold">painting</span>. Exploring colors
            and creativity in art helps me approach programming with a unique
            perspective, blending logic with creativity.
          </p>
        </div>

        {/* Optional Illustration/Image */}
        {/* <div className="flex justify-center lg:justify-end">
          <img
            src="https://images.unsplash.com/photo-1464863979621-258859e62245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmwlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Painting and creative illustration"
            className="w-full max-w-sm rounded-xl shadow-lg object-cover"
          />
        </div> */}
      </div>
    </section>
  );
};

export default About;
