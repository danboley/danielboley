import React from "react";

function ShredderCorpProjCard({ title, image, description, projLink, button }) {
  return (
    <div className="p-4 shadow-xl rounded-xl shadow-gray-300">
      <div className="h-full text-center grid justify-center items-center space-y-4">
        <h2 className="font-bold text-xl md:text-3xl">{title}</h2>
        <img
          className="sm:max-w-xl w-full h-auto m-auto rounded-xl"
          src={image}
        ></img>
        <h3 className="font-semibold text-md md:text-xl">{description}</h3>
        <a
          className="font-semibold text-md md:text-xl border- p-2 m-auto hover:bg-gray-300 rounded-xl shadow-xl shadow-gray-300 transition ease-in-out hover:scale-110"
          type="button"
          href={projLink}
          target="_blank"
        >
          <h4 className="">{button}</h4>
        </a>
      </div>
    </div>
  );
}

export default ShredderCorpProjCard;
