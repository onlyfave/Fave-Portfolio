import { comfortaa, raleway } from "@/lib/fonts";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="mx-auto flex max-w-[90rem] items-center justify-between px-12 py-5">
      <h2
        className={`text-lg/[2rem] font-bold text-[#25282B] ${comfortaa.className}`}
      >
        Onyeneke Favour
      </h2>

      <nav>
        <ul className="flex items-center gap-12">
          <li>
            <Link
              href="#"
              className={`text-lg font-medium text-[#25282B] ${raleway.className}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`text-lg font-medium text-[#25282B] ${raleway.className}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`text-lg font-medium text-[#25282B] ${raleway.className}`}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
