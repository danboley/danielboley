import React from "react";

function About() {
  function finnsAge() {
    let year = new Date().getFullYear();
    let age = year - 2018;
    return age;
  }

  return (
    <div className="my-24 w-full py-4 items-center sm:px-8 px-4">
      <div className="max-w-screen-xl m-auto">
        <h1 className="font-bold text-center text-xl md:text-3xl">About Me</h1>
        <p className="text-lg text-center pt-4 px-8">
          Howdy! My name is Daniel Boley and I'm a software engineer,
          ultramarathoner, dog dad, music enthusiast, list lover, and much more.
        </p>
        <div className="md:grid grid-cols-3 sm:pt-16 pt-8 sm:pl-16 items-center">
          <img
            className="w-full h-auto max-w-xl rounded-xl shadow-xl shadow-gray-400"
            src="https://i.imgur.com/N1nZuDF.jpg"
          ></img>
          <div className="col-span-2 my-8 mx-8 sm:text-left text-center flex">
            <div>
              <h2 className="font-bold text-lg sm:pt-0 pt-2">
                Software Engineer
              </h2>
              <p className="sm:pr-16">
                In 2022, I enrolled in Flatiron School's Full Stack Software
                Engineering program. Since then, I've developed applications and
                websites from wireframe to deployment, including this website.
                To check out <a>some of my projects</a> or learn more about{" "}
                <a>my tech skills</a>, feel free to look around.
              </p>
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-3 sm:pt-16 pt-8 sm:pl-16 items-center">
          <img
            className="w-full h-auto max-w-xl rounded-xl shadow-xl shadow-gray-400"
            src="https://i.imgur.com/aCpVPAd.jpg"
          ></img>
          <div className="col-span-2 my-8 mx-8 sm:text-left text-center flex">
            <div>
              <h2 className="font-bold text-lg sm:pt-0 pt-2">Ultrarunner</h2>
              <p className="sm:pr-16">
                One of my biggest passions is running. I love running on trails,
                up mountains; really anywhere. I've run the <a>NYC Marathon</a>,
                won a small <a>trail marathon</a>, and run in races up to{" "}
                <a>50 miles</a>. In July 2023, I'll be running my first 100 mile
                race, the <a>Vermont 100</a>.
              </p>
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-3 sm:pt-16 pt-8 sm:pl-16 items-center">
          <img
            className="w-full h-auto max-w-xl rounded-xl shadow-xl shadow-gray-400"
            src="https://i.imgur.com/PZDxxqS.jpg"
          ></img>
          <div className="col-span-2 my-8 mx-8 sm:text-left text-center flex">
            <div>
              <h2 className="font-bold text-lg sm:pt-0 pt-2">Dog Dad</h2>
              <p className="sm:pr-16">
                I have a {finnsAge()} year old golden retriever named Finn. He's
                a sweetheart!
              </p>
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-3 sm:pt-16 pt-8 sm:pl-16 items-center">
          <img
            className="w-full h-auto max-w-xl rounded-xl shadow-xl shadow-gray-400"
            src="https://i.imgur.com/OycLvsK.jpg"
          ></img>
          <div className="col-span-2 my-8 mx-8 sm:text-left text-center flex">
            <div>
              <h2 className="font-bold text-lg sm:pt-0 pt-2">
                Music Enthusiast
              </h2>
              <p className="sm:pr-16">
                Another passion of mine is music! Though I can't play a single
                note, I love <a>attending concerts</a>,{" "}
                <a>collecting records</a>, and <a>listening to music</a> as much
                as I possibly can.
              </p>
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-3 sm:pt-16 pt-8 sm:pl-16 items-center">
          <img
            className="w-full h-auto max-w-xl rounded-xl shadow-xl shadow-gray-400"
            src="https://i.imgur.com/FUofp2T.jpg"
          ></img>
          <div className="col-span-2 my-8 mx-8 sm:text-left text-center flex">
            <div>
              <h2 className="font-bold text-lg sm:pt-0 pt-2">List Lover</h2>
              <p className="sm:pr-16">
                If I haven't made it apparent by now, I absolutely LOVE lists.
                There's nothing more satisfying than adding to a good list or
                excel spreadsheet. <a>Favorite movies</a>, <a>top beers</a>,{" "}
                <a>concerts I've attended</a>, <a>records I own</a>. You name
                it, I've got a list!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
