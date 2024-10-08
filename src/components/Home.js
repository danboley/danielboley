import React from "react";

function Home() {
  return (
    <div className="sm:my-16 my-36 w-full md:h-screen sm:p-2 px-2 items-center">
      <div className="max-w-screen-xl m-auto md:grid grid-cols-3 sm:py-16 px-2 gap-8">
        <div className="pr-8">
          <img
            alt="Daniel Boley"
            className="w-full h-auto rounded-full m-4 shadow-xl shadow-gray-400"
            src="https://i.imgur.com/aCpVPAd.jpg"
          ></img>
        </div>
        <div className="col-span-2 my-8 mx-2 sm:pt-20">
          <h1 className="font-bold text-2xl sm:text-3xl pt-8 px-8 sm:text-left text-center">
            {" "}
            Howdy! I'm Dan!{" "}
          </h1>
          <h2 className="text-xl p-8 sm:text-left text-center">
            I'm a full stack software engineer and I built this website to
            display some of the projects I've created, show off my technical
            skills, and share some of my other interests. Thanks for stopping
            by!
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
