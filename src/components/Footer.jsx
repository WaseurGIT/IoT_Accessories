import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/md-waseur-rahman-bb5752298/">
            <FaLinkedin className="text-2xl text-blue-500" />
          </a>
          <a href="https://github.com/WaseurGIT">
            <FaGithub className="text-2xl text-black" />
          </a>
          <a>
            <IoMdMail className="text-2xl text-red-500" />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Waseur
          Rahman
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
