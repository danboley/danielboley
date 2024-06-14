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
          Some of my passions include software engineering, running, hiking,
          reading, movies, music, lists, beer, and most importantly, my family!
        </p>
        <div className="md:grid grid-cols-3 sm:pt-16 pt-8 sm:pl-16 items-center">
          <img
            alt="Picture of Code in IDE"
            className="w-full h-auto max-w-xl rounded-xl shadow-xl shadow-gray-400"
            src="https://i.imgur.com/N1nZuDF.jpg"
          ></img>
          <div className="col-span-2 my-8 mx-8 sm:text-left text-center flex">
            <div>
              <h2 className="font-bold text-lg sm:pt-0 pt-2">
                Software Engineer
              </h2>
              <p className="sm:pr-16">
                I'm a Full Stack Software Engineer with professional experience
                designing and developing microservices and enterprise web
                applications from database to user interface. Additionally, I've
                developed personal, technical projects from wireframe to
                deployment, including this website. To check out{" "}
                <a
                  className="underline hover:text-gray-600"
                  href="/#/techprojects"
                >
                  some of my projects
                </a>{" "}
                or learn more about{" "}
                <a className="underline hover:text-gray-600" href="/#/skills">
                  my tech skills
                </a>
                , feel free to look around!
              </p>
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-3 sm:pt-16 pt-8 sm:pl-16 items-center">
          <img
            alt="Picture of Dan running"
            className="w-full h-auto max-w-xl rounded-xl shadow-xl shadow-gray-400"
            src="https://i.imgur.com/aCpVPAd.jpg"
          ></img>
          <div className="col-span-2 my-8 mx-8 sm:text-left text-center flex">
            <div>
              <a
                className="font-bold text-lg sm:pt-0 pt-2 hover:text-gray-600"
                href="https://www.strava.com/athletes/danboley"
                target="_blank"
              >
                Ultrarunner
              </a>
              <p className="sm:pr-16">
                One of my biggest passions is running. I love running on trails,
                up mountains; really anywhere. I've run the{" "}
                <a
                  className="underline hover:text-gray-600"
                  href="https://www.strava.com/activities/6226507501/overview"
                  target="_blank"
                >
                  NYC Marathon
                </a>
                , won a couple of{" "}
                <a
                  className="underline hover:text-gray-600"
                  href="https://www.strava.com/activities/8147043323/overview"
                  target="_blank"
                >
                  trail
                </a>{" "}
                <a
                  className="underline hover:text-gray-600"
                  href="https://www.strava.com/activities/9502894817/overview"
                  target="_blank"
                >
                  marathons
                </a>
                , and run in races up to{" "}
                <a
                  className="underline hover:text-gray-600"
                  href="https://www.strava.com/activities/7896222919/overview"
                  target="_blank"
                >
                  50
                </a>{" "}
                <a
                  className="underline hover:text-gray-600"
                  href="https://www.strava.com/activities/9281715185/overview"
                  target="_blank"
                >
                  miles
                </a>
                . My current goal is to complete my first 100 mile race.
              </p>
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-3 sm:pt-16 pt-8 sm:pl-16 items-center">
          <img
            alt="Picture of Patrick and Finn"
            className="w-full h-auto max-w-xl rounded-xl shadow-xl shadow-gray-400"
            src="https://i.imgur.com/bAnlVid.jpg"
          ></img>
          <div className="col-span-2 my-8 mx-8 sm:text-left text-center flex">
            <div>
              <h2 className="font-bold text-lg sm:pt-0 pt-2">Dad / Dog Dad</h2>
              <p className="sm:pr-16">
                In 2023, my wife and I welcomed our son Patrick into our family!
                We also have a {finnsAge()} year old golden retriever named
                Finn. Patrick and Finn are best friends already!
              </p>
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-3 sm:pt-16 pt-8 sm:pl-16 items-center">
          <img
            alt="Picture of the band Tennis performing live"
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
                note, I love{" "}
                <a
                  className="underline hover:text-gray-600"
                  href="https://www.setlist.fm/concerts/danboley"
                  target="_blank"
                >
                  attending concerts
                </a>
                ,{" "}
                <a
                  className="underline hover:text-gray-600"
                  href="https://www.discogs.com/user/danboley/collection"
                  target="_blank"
                >
                  collecting records
                </a>
                , and{" "}
                <a
                  className="underline hover:text-gray-600"
                  href="https://open.spotify.com/user/12164892286"
                  target="_blank"
                >
                  listening to music
                </a>{" "}
                as much as I possibly can.
              </p>
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-3 sm:pt-16 pt-8 sm:pl-16 items-center">
          <img
            alt="Picture of Discogs app"
            className="w-full h-auto max-w-xl rounded-xl shadow-xl shadow-gray-400"
            src="https://i.imgur.com/FUofp2T.jpg"
          ></img>
          <div className="col-span-2 my-8 mx-8 sm:text-left text-center flex">
            <div>
              <h2 className="font-bold text-lg sm:pt-0 pt-2">List Lover</h2>
              <p className="sm:pr-16">
                If I haven't made it apparent by now, I absolutely LOVE lists.
                There's nothing more satisfying than putting together a good
                list or excel spreadsheet.{" "}
                <a
                  className="underline hover:text-gray-600"
                  href="https://letterboxd.com/danboley/"
                  target="_blank"
                >
                  Favorite movies
                </a>
                , <a>top beers</a>,{" "}
                <a
                  className="underline hover:text-gray-600"
                  href="https://www.setlist.fm/concerts/danboley"
                  target="_blank"
                >
                  concerts I've attended
                </a>
                ,{" "}
                <a
                  className="underline hover:text-gray-600"
                  href="https://www.discogs.com/user/danboley/collection"
                  target="_blank"
                >
                  records in my collection
                </a>
                . You name it, I've got a list!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
