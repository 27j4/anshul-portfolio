import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Education from "./Pages/Education";
import Projects from "./Pages/Projects";
import CompetitiveProgramming from "./Pages/CompetitiveProgramming";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import Experience from "./Pages/Experience";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/Experience" element={<Experience />} /> */}
          <Route path="/Education" element={<Education />} />
          <Route path="/Projects" element={<Projects />} />
          <Route
            path="/Competitive-Programming"
            element={<CompetitiveProgramming />}
          />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    </>
  );
}

export default App;
