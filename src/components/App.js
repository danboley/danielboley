import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from './Home';
import TechProjects from './TechProjects';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/techprojects" element={<TechProjects />} />
          <Route path="/testing" />
        </Routes>
      </div>
  );
}

export default App;
