import React from "react";

function TechProjCard({
  title,
  image,
  description,
  details,
  loom,
  github,
  created,
}) {
  return (
    <div className="flex items-center justify-center h-auto w-full p-4 shadow-xl shadow-gray-300 rounded-xl">
      
        <img className="max-w-md h-auto" src={image}></img>
        <h2>{title}</h2>
        <h3>{description}</h3>
        {/* <a href={loom}>Demo</a> */}
        {loom ? (
          <div>
            <iframe
              width="420"
              height="315"
              src={loom}
              allow="fullscreen *"
            ></iframe>
          </div>
        ) : null}
        {/* <div>
          <iframe width="420" height="315" src={loom} allow="geolocation"></iframe>
        </div> */}
        <a href={github}>GitHub Repo</a>
        <ul>
          {details.split(".").map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <h4>Created: {created}</h4>
      
    </div>
  );
}

export default TechProjCard;
