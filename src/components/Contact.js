import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="my-24 w-full lg:h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-center text-xl md:text-3xl sm:pt-4">
          Contact Info
        </h1>
        <p className="text-lg text-center py-4 sm:pb-8 px-8">
          Feel free to get connect with me or get in touch!
        </p>
      </div>

      <div className="max-w-xl mx-auto h-auto flex flex-col justify-center">
        <div className="grid gap-8">
          <div className="sm:mx-36 p-6 shadow-xl rounded-xl shadow-gray-300 transition ease-in-out sm:hover:scale-110">
            <a href="https://www.linkedin.com/in/daniel-boley/" target="_blank">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="flex items-center justify-center text-7xl">
                  <div className="m-auto">
                    <SiLinkedin />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                  <h2>LinkedIn</h2>
                </div>
              </div>
            </a>
          </div>

          <div className="sm:mx-36 p-6 shadow-xl rounded-xl shadow-gray-300 transition ease-in-out sm:hover:scale-110">
            <a href="mailto:danboley1@gmail.com" target="_blank">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="flex items-center justify-center text-7xl">
                  <div className="m-auto">
                    <MdOutlineEmail />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                  Email
                </div>
              </div>
            </a>
          </div>

          <div className="sm:mx-36 p-6 shadow-xl rounded-xl shadow-gray-300 transition ease-in-out sm:hover:scale-110">
            <a href="https://github.com/danboley" target="_blank">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="flex items-center justify-center text-7xl">
                  <div className="m-auto">
                    <SiGithub />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                  GitHub
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
