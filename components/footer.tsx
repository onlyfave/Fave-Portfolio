import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-8 pt-36">
      <div className="flex items-center gap-6">
        <FaXTwitter color="#000" size={24} />
        <FaLinkedinIn color="#000" size={24} />
        <SiGmail color="#000" size={24} />
      </div>
      <p className="text-base text-[#828282]">
        Onyeneke Favour {new Date().getFullYear()}
      </p>
    </footer>
  );
};
