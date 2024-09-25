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
  SiMongodb,
  SiVault,
  SiSquarespace,
  SiGoogledomains,
  SiAzurepipelines,
  SiAzureartifacts,
  SiConfluence,
  SiSwagger,
  SiFigma,
  SiAxios,
  SiNodedotjs,
  SiExpress,
  SiGooglecloud,
  SiVercel,
  SiJsonwebtokens,
  SiSass,
  SiCreatereactapp,
} from "react-icons/si";

function Skills() {
  return (
    <div className="my-24 w-full h-full">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-center text-xl md:text-3xl sm:pt-4">
          Tech Stack & Skills
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
          Frameworks & Runtimes
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiCreatereactapp className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-2xl">
                <h2>Create React App</h2>
              </div>
            </div>
          </div>

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
                <SiNodedotjs className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Node.js</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiExpress className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Express.js</h2>
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
                <SiSass className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Sass</h2>
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
                <SiFigma className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Figma</h2>
              </div>
            </div>
          </div>
        </div>

        <h2 className="font-bold text-center text-xl md:text-3xl py-10 md:py-8">
          Database Management
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiMongodb className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>MongoDB</h2>
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
                <SiAzurepipelines className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Azure Pipelines</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiAzureartifacts className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Azure Artifacts</h2>
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

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiVercel className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Vercel</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiSquarespace className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Square-space</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiGooglecloud className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Google Cloud</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiGoogledomains className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Google Domains</h2>
              </div>
            </div>
          </div>
        </div>

        <h2 className="font-bold text-center text-xl md:text-3xl py-10 md:py-8">
          Software / Tools / Etc...
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiAxios className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Axios</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiJsonwebtokens className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>JWTs</h2>
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
                <SiSwagger className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Swagger</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiVault className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Vault</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl shadow-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiConfluence className="text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-center text-xl md:text-3xl">
                <h2>Confluence</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
