export const Experience = () => {
  return (
    <div className="relative flex flex-col justify-between gap-8 px-24 py-8 md:flex-row">
      <div className="relative z-10 md:w-1/2">
        <div className="mb-8">
          <h2 className="b mb-4 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-2xl font-bold text-transparent">
            Professional Experience
          </h2>
          <div className="mb-6 rounded-lg bg-white/5 p-6 shadow-lg backdrop-blur-sm transition-all hover:translate-y-[-2px] hover:bg-white/10">
            <h3 className="bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-xl font-semibold text-transparent">
              Personal Assistant
            </h3>
            <p className="text-gray-300">Duration: 1 Year</p>
            <ul className="ml-4 mt-2 list-disc text-gray-300">
              <li>Developed strong organizational skills.</li>
              <li>
                Enhanced capabilities in scheduling, prioritizing tasks, and
                attentive note-taking.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 md:w-1/2">
        <div className="mb-8">
          <h2 className="b mb-4 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-2xl font-bold text-transparent">
            Education
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg bg-white/5 p-6 shadow-lg backdrop-blur-sm transition-all hover:translate-y-[-2px] hover:bg-white/10">
              <p className="bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text font-semibold text-transparent">
                BSc in Computer Science
              </p>
              <p className="text-gray-300">
                Lagos State University of Science and Technology
              </p>
            </div>
            <div className="rounded-lg bg-white/5 p-6 shadow-lg backdrop-blur-sm transition-all hover:translate-y-[-2px] hover:bg-white/10">
              <p className="bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text font-semibold text-transparent">
                Cloud Engineering
              </p>
              <p className="text-gray-300">AltSchool Africa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
