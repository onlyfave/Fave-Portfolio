import Project1 from "@/public/productOne.jpg";
import Project2 from "@/public/project2.png";
import Project3 from "@/public/productThree.png";
import { ProjectsItem } from "./projects-item";
const projectData = [
  {
    title: "Pulumi Deploy Static",
    description:
      "Pulumi Deploy Static is a project that utilizes Pulumi to provision and deploy a static website on AWS S3 while utilizing Cloudflare for domain management and CDN capabilities",

    image: Project1,
    link: "https://github.com/onlyfave/Pulumi-deploy-static",
    gitHubLink: "https://dev.to/onlyfave/iac-in-action-deploying-a-static-site-with-pulumi-aws-cloudflare-29cj",
  },
  {
    title: "Craftly",
    description:
      "Craftly is a web application designed to help artisans market their goods and make sales. It provides a platform where artisans can showcase their products, connect with potential buyers, and manage their business efficiently.",
    image: Project2,
    link: "https://github.com/onlyfave/Craftly-build",
    gitHubLink: "https://project2.com",
  },
  {
    title: "FastAPI Book Management",
    description:
      "This project is a RESTful API built with FastAPI for managing a book collection. It provides comprehensive CRUD (Create, Read, Update, Delete) operations for books with proper error handling, input validation, and documentation.",
    image: Project3,
    link: "https://github.com/onlyfave/fastapi-book-project",
    gitHubLink: "https://dev.to/onlyfave/fastapi-book-management-api-with-cicd-a-modern-developers-guideoverview-47j5",
  },
  {
    title: "NBA Statistics Pipeline",
    description:
      "This project is an NBA Statistics Pipeline that fetches NBA team statistics from the SportsData API and stores them in AWS DynamoDB. The project also implements structured logging using AWS CloudWatch.",
    image: Project3,
    link: "https://github.com/onlyfave/nba-stats-pipeline",
    gitHubLink: "https://project3.com",
  }
];

export const Projects = () => {
  return (
    <section id="Projects" className="flex flex-col gap-20">
      <div className="flex flex-col items-center justify-center gap-1">
        <h2 className="text-center text-[3rem]/[4.5rem] font-bold text-[#25282b]">
          Projects
        </h2>
        <div className="h-[0.25rem] w-[6.25rem] rounded-sm bg-[#fdc435]"></div>
      </div>

      <div className="mx-auto flex max-w-[62rem] flex-col gap-20">
        {projectData.map((project:any, index) => (
          <ProjectsItem
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            gitHubLink={project.gitHubLink}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
