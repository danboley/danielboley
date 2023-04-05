import React from "react";
import {
  SiJavascript,
  SiReact,
  SiRuby,
  SiRubyonrails,
  SiRubysinatra,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGithub,
  SiGithubpages,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";

function Skills() {
  return (
    <div className="my-24 w-full lg:h-screen">
      <h1 className="font-bold text-center text-xl md:text-3xl sm:pb-8 pb-4">
        Tech Stack
      </h1>

      <div className="max-w-7xl mx-auto h-auto flex flex-col justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiHtml5 className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>HTML</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiCss3 className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>CSS</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiTailwindcss className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Tailwind CSS</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiJavascript className="text-7xl shadow-gray-300" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>JavaScript</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiReact className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>React.js</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiRuby className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Ruby</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiRubysinatra className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Sinatra</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiRubyonrails className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Ruby on Rails</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiPostgresql className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>PostgreSQL</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiPostman className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Postman</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiGithub className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>GitHub</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiGithubpages className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>GitHub Pages</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
