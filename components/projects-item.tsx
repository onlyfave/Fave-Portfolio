import { playfair, roboto } from "@/lib/fonts";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export const ProjectsItem = ({
  title,
  description,
  link,
  image,
  index,
}: {
  title: string;
  description: string;
  link: string;
  image: string | StaticImageData;
  index: number;
}) => {
  return (
    <div className="grid h-[32.75rem] grid-cols-2 overflow-hidden rounded-3xl shadow-[0px_6px_64px_0px_rgba(112,144,176,0.10)]">
      <div
        className={`flex flex-col items-start gap-6 px-12 py-36 ${index % 2 === 0 ? "col-start-1" : "col-start-2"}`}
      >
        <h3
          className={`text-[2.5rem]/[3.75rem] font-bold text-[#25282B] ${playfair.className}`}
        >
          {title}
        </h3>
        <p className="text-lg text-[#828282]">{description}</p>
        <Link
          href={link}
          className={`rounded-3xl border border-[#25282B] px-6 py-2 text-lg font-medium text-[#25282B] ${roboto.className}`}
        >
          View Project
        </Link>
      </div>
      <div className={` ${index % 2 === 0 ? "" : "col-start-1 row-start-1"}`}>
        <Image src={image} alt={title} />
      </div>
    </div>
  );
};
