import React from "react";

function About() {
  return (
    <div className="my-24 w-full py-4 sm:px-8 px-4">
      <div className="">

        <h1 className="font-bold text-center text-xl md:text-3xl">About Me</h1>
        <p className="text-lg text-center py-4">
          Howdy! My name is Daniel Boley and I'm a software engineer,
          ultramarathoner, dog dad, music enthusiast, list lover, and much more.
        </p>
        <h1 className="font-bold text-xl md:text-3xl text-center py-4">
          My Many Hats
        </h1>

        <h2 className="font-bold text-lg text-left">Software Engineer</h2>
        <img src=""></img>
        <p className="text-left">
          In 2022, I enrolled in Flatiron School's Full Stack Software
          Engineering program. Since then, I've developed applications and
          websites from wireframe to deployment, including this website. To
          check out <a>some of my projects</a> or learn more about{" "}
          <a>my tech skills</a>, feel free to look around.
        </p>

        <div className="md:grid grid-cols-3 sm:pt-16 pt-8">
          <img
            className="w-full h-auto shadow-xl shadow-gray-400"
            src="https://i.imgur.com/770FSKz.jpg"
          ></img>
          <div className="col-span-2 my-8 mx-8 sm:text-left text-center">
            <h2 className="font-bold text-lg sm:pt-28 sm:px-8">Ultrarunner</h2>
            <p className="sm:pl-8 sm:pr-16">
              One of my biggest passions is running. I love running on trails,
              up mountains, really anywhere. I've run the <a>NYC Marathon</a>,
              won a small <a>trail marathon</a>, and have run races up to{" "}
              <a>50 miles</a>. In July 2023, I'll be running my first 100 mile
              race, the <a>Vermont 100</a>.
            </p>
          </div>
        </div>

        <h2 className="font-bold text-lg pt-4 text-left">Dog Dad</h2>
        <img src=""></img>
        <p className="text-left">
          I have a golden retriever named Finn. He's a sweetheart!
        </p>

        <h2 className="font-bold text-lg pt-4 text-right">
          Music Enthusiast
        </h2>
        <img src=""></img>
        <p className="text-right">
          Another passion of mine is music! Though I can't play a single note, I
          love <a>attending concerts</a>, <a>collecting records</a>, and
          listening to music as much as I possibly can.
        </p>

        <h2 className="font-bold text-lg pt-4 text-left">List Lover</h2>
        <img src=""></img>
        <p className="text-left">
          If you haven't noticed by now, I absolutely LOVE lists. There's
          nothing more satisfying than adding to a good list or excel
          spreadsheet. <a>Favorite movies</a>, <a>top beers</a>, concerts I've
          attended, records I own. You name it, I've got a list!
        </p>
      </div>
    </div>
  );
}

export default About;
