import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

function Footer({ windowWidth }) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-black text-white fixed left-0 right-0 bottom-0 h-20 p-4 sm:p-6 font-bold">
      <div className="text-center flex justify-center space-x-8">
        {windowWidth >= 900 ? (
          <h4 className="md:text-xl text-xs">© {currentYear} Daniel Boley</h4>
        ) : null}
        <h1 className="text-xl md:text-3xl transition ease-in-out hover:scale-110">
          <a href="https://www.linkedin.com/in/daniel-boley/" target="_blank">
            <SiLinkedin />
          </a>
        </h1>
        <h1 className="text-xl md:text-3xl transition ease-in-out hover:scale-110">
          <a href="mailto:danboley1@gmail.com" target="_blank">
            <MdOutlineEmail />
          </a>
        </h1>
        <h1 className="text-xl md:text-3xl transition ease-in-out hover:scale-110">
          <a href="https://github.com/danboley" target="_blank">
            <SiGithub />
          </a>
        </h1>
      </div>
      {windowWidth < 900 ? (
        <h4 className="md:text-xl text-xs text-center pt-4">
          © {currentYear} Daniel Boley
        </h4>
      ) : null}
    </div>
  );
}

export default Footer;
