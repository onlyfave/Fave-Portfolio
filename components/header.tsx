import { comfortaa, raleway } from "@/lib/fonts";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="mx- sticky top-0 flex w-[100%] bg-white items-center shadow justify-between px-12 py-5">
      <h2
        className={`text-lg/[2rem] font-bold text-[#25282B] ${comfortaa.className}`}
      >
        CloudFave
      </h2>

      <nav>
        <ul className="flex items-start gap-12">
          <li>
            <Link
              href="/"
              className={`text-lg hover:underline font-medium text-[#25282B] ${raleway.className} `}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#Projects"
              className={`text-lg hover:underline font-medium text-[#25282B] ${raleway.className}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/#Contact"
              className={`text-lg hover:underline font-medium text-[#25282B] ${raleway.className}`}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
