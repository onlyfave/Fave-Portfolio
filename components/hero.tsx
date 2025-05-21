import { playfair, roboto } from "@/lib/fonts";
// import HeroImg from "@/public/hero.jpg";
import HeroImg from "@/public/hero.png";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="mx-auto grid max-w-[90rem] grid-cols-2 items-center justify-center px-24 py-20">
      <div className="w-full max-w-[34.375rem]">
        <p className="text-xl font-bold uppercase text-[#fdc435]">
          DevOps/Cloud Engineer
        </p>
        <h1
          className={`text-[4rem]/[4.8rem] font-bold text-[#25282B] ${playfair.className}`}
        >
          Hello, my name is Onyeneke Favour
        </h1>
        <p className="py-8 text-2xl text-[#828282]">
          A passionate DevOps Engineer who is enthusiastic about creating
          excellent operation systems in an Agile environment.
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className={`rounded-lg bg-[#fdc435] px-6 py-2 text-[#25282B] ${roboto.className}`}
          >
            Resume
          </Link>
          <Link
            href="/"
            className={`rounded-lg border-[2px] border-[#25282B] px-6 py-2 text-[#25282B] ${roboto.className}`}
          >
            LinkedIn
          </Link>
        </div>
      </div>

      <div>
        <Image src={HeroImg} alt="Hero Image" className="rounded-xl" />
      </div>
    </section>
  );
};
