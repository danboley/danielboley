import React from "react";
import projects from "../data/projects";
import TechProjCard from "./TechProjCard";

function TechProjects() {
  const projs = projects.map((project) => {
    return (
      <TechProjCard
        key={project.id}
        title={project.title}
        image={project.image}
        description={project.description}
        details={project.details}
        loom={project.loom}
        github={project.githubLink}
      />
    );
  });

  return (
    <div className="my-24 w-full">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-center text-xl md:text-3xl sm:pt-4">
          Technical Projects
        </h1>
        <p className="text-lg text-center py-4 px-8">
          Portfolio of technical coding projects I've developed.
        </p>
      </div>

      <div className="mb-24 w-full">
        <div className="max-w-7xl mx-auto h-auto flex flex-col">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-8">
            {projs}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechProjects;
