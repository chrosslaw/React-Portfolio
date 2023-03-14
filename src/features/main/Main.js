import * as React from "react";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";

const Main = ({ activePage }) => {
  return (
    <main className={` ${activePage}`}>
      {activePage === "About" && <About />}
      {activePage === "Skills" && <Skills />}
      {activePage === "Projects" && <Projects />}
    </main>
  );
};
export default Main;
