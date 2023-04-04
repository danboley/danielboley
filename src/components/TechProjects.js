import React from "react";
import projectList from "../data/projectList"
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
    )
  })

  return (
    <div className="my-24">
      <h1>Technical Projects</h1>
      <div>
        {projs}
      </div>
    </div>
  );
}

export default TechProjects;
