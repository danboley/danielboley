import React from "react";

function TechProjCard({
  title,
  image,
  description,
  details,
  deployLink,
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

        <div className="p-4 flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center">
          {deployLink ? (
            <a
              className="block mb-4 md:mb-0 md:mr-2 md:w-auto md:flex-shrink-0 font-semibold text-md md:text-xl border- p-2 m-auto hover:bg-gray-300 rounded-xl shadow-xl shadow-gray-300 transition ease-in-out hover:scale-110"
              type="button"
              href={deployLink}
              target="_blank"
            >
              <h4 className="">Deployed Website</h4>
            </a>
          ) : null}
          <a
            className="block md:w-auto font-semibold text-md md:text-xl border- p-2 m-auto hover:bg-gray-300 rounded-xl shadow-xl shadow-gray-300 transition ease-in-out hover:scale-110"
            type="button"
            href={githubLink}
            target="_blank"
          >
            <h4 className="">GitHub Repo</h4>
          </a>
        </div>

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
