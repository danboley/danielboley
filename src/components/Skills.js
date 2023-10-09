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
  SiTypescript,
  SiCsharp,
  SiDotnet,
  SiAzuredevops,
  SiMicrosoftsqlserver,
  SiDocker,
  SiRender,
  SiGit,
  SiSqlite,
} from "react-icons/si";

function Skills() {
  return (
    <div className="my-24 w-full h-full">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-center text-xl md:text-3xl sm:pt-4">
          Tech Stack
        </h1>
        <p className="text-lg text-center py-4 px-8">
          Some of the languages, frameworks, platforms, and services I've worked
          with.
        </p>
      </div>

      <div className="max-w-7xl mx-auto h-auto flex flex-col justify-center">
        <h2 className="font-bold text-center text-xl md:text-3xl py-10 md:py-8">
          Programming Languages
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <SiTypescript className="text-7xl shadow-gray-300" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>TypeScript</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiCsharp className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>C#</h2>
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
        </div>

        <h2 className="font-bold text-center text-xl md:text-3xl py-10 md:py-8">
          Frontend Development
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiReact className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>React</h2>
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
                <SiTailwindcss className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Tailwind CSS</h2>
              </div>
            </div>
          </div>
        </div>

        <h2 className="font-bold text-center text-xl md:text-3xl py-10 md:py-8">
          Database
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <SiMicrosoftsqlserver className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>MSSQL</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiSqlite className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>SQLite</h2>
              </div>
            </div>
          </div>
        </div>

        <h2 className="font-bold text-center text-xl md:text-3xl py-10 md:py-8">
          DevOps / Version Control
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiAzuredevops className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Azure DevOps</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiDocker className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Docker</h2>
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
                <SiGit className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Git</h2>
              </div>
            </div>
          </div>
        </div>

        <h2 className="font-bold text-center text-xl md:text-3xl py-10 md:py-8">
          Frameworks
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiDotnet className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>.NET</h2>
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
                <SiRubysinatra className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Sinatra</h2>
              </div>
            </div>
          </div>
        </div>

        <h2 className="font-bold text-center text-xl md:text-3xl py-10 md:py-8">
          Software
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>

        <h2 className="font-bold text-center text-xl md:text-3xl py-10 md:py-8">
          Static Site Generators
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiRender className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Render</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
