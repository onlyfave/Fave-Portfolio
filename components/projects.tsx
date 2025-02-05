import Project1 from "@/public/project1.png";
import Project2 from "@/public/project2.png";
import Project3 from "@/public/project3.png";
import { ProjectsItem } from "./projects-item";

const projectData = [
  {
    title: "Project 1",
    description:
      "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    image: Project1,
    link: "https://project1.com",
  },
  {
    title: "Project 2",
    description:
      "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    image: Project2,
    link: "https://project2.com",
  },
  {
    title: "Project 3",
    description:
      "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    image: Project3,
    link: "https://project3.com",
  },
];

export const Projects = () => {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex flex-col items-center justify-center gap-1">
        <h2 className="text-center text-[3rem]/[4.5rem] font-bold text-[#25282b]">
          Projects
        </h2>
        <div className="h-[0.25rem] w-[6.25rem] rounded-sm bg-[#fdc435]"></div>
      </div>

      <div className="mx-auto flex max-w-[62rem] flex-col gap-20">
        {projectData.map((project, index) => (
          <ProjectsItem
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
