const About = () => {
  return (
    <div id="about" className=" font-sans text-brand-text flex items-center justify-center py-12 sm:py-16 px-4 sm:px-6 font-medium">
      {/* BEGIN: AboutSection */}
      <main
        className="w-full container mx-auto "
        data-purpose="Main content container for the 'About' section"
      >
        {/* Section Header */}
        <header>
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-purple mb-8">
            About My Journey
          </h1>
        </header>

        {/* BEGIN: JourneyCard */}
        <section
          className=" text-gray-400 rounded-xl p-8 sm:p-10 md:p-12"
          data-purpose="Card containing the journey details"
        >
          {/* Introduction Paragraph */}
          <p className="text-lg leading-relaxed mb-8">
            I am Shajida Akter Lopa, a passionate MERN Stack Developer. I
            approach my work with a detail-oriented mindset and am committed to
            building robust and functional applications. I pride myself on being
            a good listener, which helps me understand project requirements
            deeply, and I highly value continuous learning in the web
            development field.
          </p>

          {/* Programming Journey Section */}
          <div
            className="mb-8"
            data-purpose="Details about programming experience"
          >
            <p className="text-lg leading-relaxed">
              My development journey started with Programming Hero. I began by
              working on projects using simple HTML and CSS. As my knowledge
              grew, I eagerly explored and mastered the full MERN (MongoDB,
              Express, React, Node.js) stack. While I identify as a slow
              learner, I utilize my inherent patience to systematically overcome
              this challenge, ensuring I fully grasp every concept and deliver
              quality work.
            </p>
          </div>

          {/* Hobbies Section */}
          <div
            className="mb-8"
            data-purpose="Details about hobbies and interests outside of coding"
          >
            <p className="text-lg leading-relaxed">
              Outside of coding, my hobbies are painting and gardening. These
              creative pursuits perfectly complement my professional work, as
              they cultivate the same qualities I bring to development: patience
              and extreme attention to detail. I apply these core values to
              every task I undertake, whether it's perfecting a painting,
              nurturing a plant's growth, or fine-tuning a web application's
              code.
            </p>
          </div>

          {/* Call to Action Link */}
          <a
            className="text-brand-purple font-semibold text-lg hover:underline transition-colors duration-300 block mt-8"
            href="#"
          >
            Ready to collaborate! →
          </a>
        </section>
        {/* END: JourneyCard */}
      </main>
    </div>
  );
};

export default About;
