import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from './Home';
import TechProjects from './TechProjects';
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="techprojects" element={<TechProjects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
  );
}

export default App;
