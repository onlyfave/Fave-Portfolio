import HeroImg from "@/public/hero.jpg";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="grid grid-cols-2 items-center justify-center px-24 py-20">
      <div className="">
        <h1 className="w-full max-w-[36rem] text-[4.2rem]/[normal]">
          Onyeneke Favour
        </h1>
        <p className="w-full max-w-[36rem] pt-5 text-xl">
          A passionate DevOps Engineer who is enthusiastic about creating
          excellent operation systems in an Agile environment.
        </p>
      </div>

      <div>
        <Image src={HeroImg} alt="Hero Image" className="rounded-xl" />
      </div>
    </section>
  );
};
