import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import TechProjects from "./TechProjects";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

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
    <div className="App">
      <Navbar windowWidth={windowWidth} />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="techprojects" element={<TechProjects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer windowWidth={windowWidth} />
    </div>
  );
}

export default App;
