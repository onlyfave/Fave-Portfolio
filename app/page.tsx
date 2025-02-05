import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      {/* <About />
      <Experience />
      <Contact /> */}
    </>
  );
}
