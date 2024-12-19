import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-12 py-5">
      <h2 className="text-2xl text-white">Fave ✨</h2>

      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <Link
              href="#"
              className="px-5 text-base font-semibold text-[#f5c8e8]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="px-5 text-base font-semibold text-[#f5c8e8]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="px-5 text-base font-semibold text-[#f5c8e8]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
