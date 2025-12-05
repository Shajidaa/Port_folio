import { FaGraduationCap, FaCalendarAlt, FaUniversity, FaAward } from "react-icons/fa";

const educationData = [
  {
    id: 1,
    title: "BA in Islamic Studies",
    institute: "Jagannath University (JnU)",
    years: "2022 - Present",
    status: "Ongoing",
    description: "Pursuing deeper knowledge and academic growth in Islamic Studies with focus on contemporary applications and research methodologies.",
  },
  {
    id: 2,
    title: "Higher Secondary Certificate (HSC)",
    institute: "Hazi Misir Ali University College (HMC)",
    years: "Completed",
    group: "Science",
    gpa: "5.00",
    description: "Completed higher secondary education with outstanding academic performance in Science group.",
  },
];

const EducationTimeline = () => {
  return (
    <section id="education" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-purple-400 to-purple-900 text-transparent bg-clip-text mb-3 sm:mb-4">
            Educational Journey
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto px-4">
            My academic background and continuous pursuit of knowledge
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6 sm:space-y-8">
          {educationData.map((item, index) => (
            <div key={item.id}>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Header with Icon */}
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-purple-100 rounded-lg">
                    <FaGraduationCap className="text-xl sm:text-2xl md:text-3xl text-purple-600" />
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-700">
                      <FaUniversity className="text-purple-500 text-sm sm:text-base" />
                      <p className="text-sm sm:text-base md:text-lg font-medium">{item.institute}</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="divider my-3 sm:my-4 before:bg-purple-200 after:bg-purple-200"></div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  {/* Years/Status */}
                  <div className="flex items-center gap-2 sm:gap-3 bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <FaCalendarAlt className="text-purple-500 text-base sm:text-lg md:text-xl flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">Duration</p>
                      <p className="text-sm sm:text-base text-gray-800 font-semibold">{item.years}</p>
                    </div>
                  </div>

                  {/* GPA or Status */}
                  {item.gpa && (
                    <div className="flex items-center gap-2 sm:gap-3 bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <FaAward className="text-purple-500 text-base sm:text-lg md:text-xl flex-shrink-0" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500">GPA</p>
                        <p className="text-sm sm:text-base text-gray-800 font-semibold">{item.gpa} out of 5.00</p>
                      </div>
                    </div>
                  )}

                  {item.status && (
                    <div className="flex items-center gap-2 sm:gap-3 bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <FaAward className="text-purple-500 text-base sm:text-lg md:text-xl flex-shrink-0" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500">Status</p>
                        <p className="text-sm sm:text-base text-gray-800 font-semibold">{item.status}</p>
                      </div>
                    </div>
                  )}

                  {/* Group */}
                  {item.group && (
                    <div className="flex items-center gap-2 sm:gap-3 bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <FaGraduationCap className="text-purple-500 text-base sm:text-lg md:text-xl flex-shrink-0" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500">Group</p>
                        <p className="text-sm sm:text-base text-gray-800 font-semibold">{item.group}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className="divider my-3 sm:my-4 before:bg-purple-200 after:bg-purple-200"></div>

                {/* Description */}
                <div className="mt-3 sm:mt-4">
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Separator between cards (not after last item) */}
              {index < educationData.length - 1 && (
                <div className="flex items-center justify-center my-6 sm:my-8">
                  <div className="h-8 sm:h-12 w-0.5 bg-gradient-to-b from-purple-400 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
