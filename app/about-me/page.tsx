import { playfair, roboto } from "@/lib/fonts";
import Link from "next/link";
import hero from "@/public/about-hero.png";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="mx-auto flex max-w-[90rem] items-center gap-20 px-24 pt-20">
      <div className="flex w-full max-w-[36.75rem] flex-col items-start gap-8">
        <h1
          className={`text-[3rem]/[4.5rem] font-bold text-[#25282b] ${playfair.className}`}
        >
          About me
        </h1>
        <p className="text-2xl text-[#828282]">
          Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor
          neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed
          cras sed. Aliquet risus posuere aliquet imperdiet sit.
        </p>
        <Link
          href="/"
          className={`rounded-lg bg-[#fdc435] px-6 py-2 text-[#25282B] ${roboto.className}`}
        >
          Projects
        </Link>
      </div>

      <div>
        <Image src={hero} alt="Hero Image" className="size-[32.75rem]" />
      </div>
    </section>
  );
}
