import React from "react";

function TechProjCard({
  title,
  image,
  description,
  details,
  loom,
  githubLink,
}) {
  return (
    <div className="p-4 shadow-xl rounded-xl shadow-gray-300">
      <div className="h-full text-center grid justify-center items-center space-y-4">
        <img
          className="sm:max-w-xl w-full h-auto m-auto rounded-xl"
          src={image}
        ></img>
        <h2 className="font-bold text-xl md:text-3xl">{title}</h2>
        <h3 className="font-semibold text-md md:text-xl">{description}</h3>
        {/* <a className="text-md md:text-xl" href={loom}>Demo</a> */}
        {loom ? (
          <iframe
            className="m-auto rounded-xl"
            src={loom}
            allow="fullscreen *"
          ></iframe>
        ) : null}
        <a
          className="font-semibold text-md md:text-xl border- p-2 m-auto hover:bg-gray-300 rounded-xl shadow-xl shadow-gray-300 transition ease-in-out hover:scale-110"
          type="button"
          href={githubLink}
          target="_blank"
        >
          <h4 className="">GitHub Repo</h4>
        </a>
        <ul className="text-md md:text-xl space-y-2">
          {details.split(".").map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TechProjCard;
