import React from "react";
import projectList from "../data/projectList";
import TechProjCard from "./TechProjCard";

function TechProjects() {
  const projs = projectList.map((project) => {
    return (
      <TechProjCard
        key={project.id}
        title={project.title}
        image={project.image}
        description={project.description}
        details={project.details}
        loom={project.loom}
        github={project.github}
        created={project.created}
      />
    );
  });

  return (
    <div className="my-24 w-full">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-center text-xl md:text-3xl sm:pt-4">
          Technical Projects
        </h1>
        <p className="text-lg text-center py-4 sm:pb-8 px-8">
          Portfolio of technical coding projects I've completed.
        </p>
        <p className="text-lg text-center py-4 sm:pb-8 px-8">Coming Soon!</p>
      </div>

      {/* <div className="max-w-7xl mx-auto">{projs}</div> */}
    </div>
  );
}

export default TechProjects;
