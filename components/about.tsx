"use client";
import { useState } from "react";

const dropdownData = [
  {
    title: "Linux Administration",
    items: [
      "User and Group Management",
      "Filesystem Management",
      "Networking",
      "Package Management",
    ],
  },
  {
    title: "Programming and Scripting",
    items: ["Python", "JavaScript", "Bash", "PowerShell"],
  },
  {
    title: "Version Control System (VCS)",
    items: ["Git", "GitHub", "GitLab"],
  },
  {
    title: "Containerization and Orchestration",
    items: ["Docker", "Kubernetes"],
  },
  {
    title: "Cloud Platforms",
    items: ["AWS", "Azure", "GCP"],
  },
  {
    title: "Monitoring Tools",
    items: ["Prometheus", "Grafana"],
  },
  {
    title: "Continuous Integration & Deployment",
    items: ["Jenkins"],
  },
  {
    title: "Infrastructure as Code",
    items: ["Terraform", "Ansible"],
  },
];

export const About = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-[#fdc435] py-20">
      <div className="container mx-auto grid grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-12">
        <div className="flex flex-col space-y-12">
          <div className="space-y-6">
            <h2 className="bg-gradient-to-r text-zinc-800 from-gray-400 to-gray-500 bg-clip-text text-7xl font-bold tracking-tighter text-transparent">
              About Me
            </h2>
            <p className="text-2xl leading-relaxed text-[#232323]">
              Highly motivated and detail-oriented Cloud Engineer with a solid background in software development
              and IT operations who specializes in creating robust, scalable
              solutions that enhance operational efficiency and drive business
              success.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold text-[#232323]">Soft Skills</h2>
            <ul className="grid grid-cols-1 gap-4 pl-4 md:grid-cols-2">
              {[
                "Collaboration",
                "Leadership",
                "Emotional Intelligence",
                "Adaptability",
                "Excellent Communication",
              ].map((skill) => (
                <li key={skill} className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-[#232323]"></span>
                  <span className="text-xl text-[#232323] transition-all duration-300 hover:translate-x-2 hover:transform hover:text-white">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-4xl font-semibold text-[#232323]">
            Technical Skills
          </h2>
          <div className="space-y-4">
            {dropdownData.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl bg-gradient-to-r from-[#232323] to-[#1e1e1e] p-4 shadow-lg transition-all duration-300 hover:shadow-xl ${
                  openIndex === index ? "ring-2 ring-gray-400" : ""
                }`}
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="flex w-full cursor-pointer items-center justify-between text-left text-2xl font-medium text-gray-200 hover:text-white"
                >
                  <span className="flex items-center space-x-3">
                    <span
                      className={`transform transition-all duration-300 ${
                        openIndex === index ? "text-gray-400" : ""
                      }`}
                    >
                      {item.title}
                    </span>
                  </span>
                  <svg
                    className={`h-6 w-6 transform transition-transform duration-300 ${
                      openIndex === index
                        ? "rotate-180 text-gray-400"
                        : "text-gray-400"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "mt-4 max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="grid grid-cols-1 gap-3 pl-6 md:grid-cols-2">
                    {item.items.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="flex items-center space-x-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                        <span className="text-lg text-gray-300 transition-colors duration-200 hover:text-white">
                          {subItem}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
