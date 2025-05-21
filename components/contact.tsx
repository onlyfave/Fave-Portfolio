import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Contact = () => {
  return (
    <div id="Contact" className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-800">
            Let's Connect
          </h2>
          <p className="mb-8 text-slate-800">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-slate-800 hover:text-slate-600"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-slate-800 hover:text-slate-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-slate-800 hover:text-slate-600"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="rounded-lg bg-slate-800 p-8 shadow-lg">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-slate-600 bg-slate-700 px-2 py-2 text-slate-100 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-slate-600 bg-slate-700 px-2 py-2 text-slate-100 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-slate-200"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full rounded-md border-slate-600 bg-slate-700 px-2 py-2 text-slate-100 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-slate-600 bg-slate-700 px-2 py-2 text-slate-100 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-[#fdc435] px-4 py-2 text-slate-800 transition duration-300 hover:bg-[#fdc405]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
