export default [
  {
    id: 1,
    title: "Portfolio Website",
    image: "https://i.imgur.com/7avGWXa.jpg",
    description:
      "Allows users to see my technical portfolio and learn more about me!",
    details: `✦ SPA created with Javascript, React, and Node.
    ✦ Styled with Tailwind CSS.`,
    githubLink: "https://github.com/danboley/danielboley",
  },
  {
    id: 2,
    title: "Strava",
    image: "https://i.imgur.com/5FLeE8P.jpg",
    description:
      "Clone of the fitness app Strava that allows users to upload physical activities and track performance data.",
    details: `✦ Developed the core functionality of Strava (full CRUD for activities) using a Rails API backend and React frontend. 
    ✦ Designed the user interface completely by eye including an identical website layout with Tailwind CSS. 
    ✦ Implemented authentication and authorization, including digest access authentication for credential validation, as well as session persistence, allowing users to create accounts and view content seamlessly`,
    loom: "https://www.loom.com/embed/6cb8106a374d44dead956cb5700297c4",
    githubLink: "https://github.com/danboley/capstone-project",
  },
  {
    id: 3,
    title: "PlantSpace",
    image: "https://i.imgur.com/oKqAAjv.jpg",
    description:
      "Allows users to create profiles in which they can track their plants and plant care data, as well as view other users’ plants.",
    details: `✦ Built full-stack Single Page Application utilizing a Rails API backend with a React frontend.
    ✦ Implemented authentication and authorization, including password protection, allowing users to create accounts.
    ✦ Established various models on the backend, including one-to-many and reciprocal many-to-many relationships`,
    loom: "https://www.loom.com/embed/c919e35212fd412b9dd2d29353051e29",
    githubLink: "https://github.com/danboley/plantspace",
  },
  {
    id: 4,
    title: "Flatiron Tutor Appointments",
    image: "https://i.imgur.com/FcKRIRt.png",
    description:
      "Allows Flatiron students to book, reschedule, and cancel one on one tutor sessions with Flatiron staff.",
    details: `✦ Built a Sinatra API backend that utilizes Active Record to access and persist data in the database.
    ✦ Established multiple models within the database, implementing one-to-many and many-to-many relationships.
    ✦ Full CRUD capability established within the Sinatra backend and React frontend that interacts with the API to perform CRUD actions`,
    loom: "https://www.loom.com/embed/6cb8106a374d44dead956cb5700297c4",
    githubLink: "https://github.com/danboley/phase-3-project-frontend",
  },
  {
    id: 5,
    title: "Halloween App",
    image: "https://i.imgur.com/1CKg5xH.jpg",
    description:
      "Fun, interactive app in which users can find top Halloween costumes, read and share scary stories, and countdown to Halloween.",
    details: `✦ Utilized React library to build the frontend of the Single Page Application.
    ✦ Implemented various routes using React Router, following RESTful routing conventions, with a Navigation Bar allowing users to navigate between routes.
    ✦ Used json-server to create a mock RESTful API backend, allowing for HTTP requests to the json server`,
    githubLink: "https://github.com/sethbdev/phase-2-project",
  },
  {
    id: 6,
    title: "Farmers Market Recipe Finder",
    image: "https://i.imgur.com/WMBB7FR.png",
    description:
      "Allows users to interact with Tasty’s recipe API to find top recipes based on seasonal ingredient selections.",
    details: `✦ Utilized vanilla JavaScript to create the frontend for the Single Page Application.
    ✦ Created custom event listeners to handle DOM events and enable user interactivity.
    ✦ Implemented array iteration methods on data accessed from an external, public API, while protecting the API key in a gitignore file
      `,
    githubLink: "https://github.com/sam-a-code/seasonal-recipes",
  },
];
