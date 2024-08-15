import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import TechProjects from "./TechProjects";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import ShredderCorp from "./ShredderCorp";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar windowWidth={windowWidth} />
      <div className="flex-grow">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="techprojects" element={<TechProjects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shreddercorp" element={<ShredderCorp />} />
      </Routes>
      </div>
      <Footer windowWidth={windowWidth} />
    </div>
  );
}

export default App;
