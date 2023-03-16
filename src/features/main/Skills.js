import { useState } from "react";
import LogoBar from "../logo-bar/LogoBar";

const Skills = () => {
  const [logos, setLogos] = useState([]);
  const [logos2, setLogos2] = useState([]);
  return (
    <div className="skills-container">
      <LogoBar
        speed={1.1}
        size={80}
        logoClass="logo"
        barClass="logo-bar"
        sliderClass="slider"
        direction="left"
        logos={logos}
        setLogos={setLogos}
      />
      <LogoBar
        speed={2.2}
        size={160}
        logoClass="logo-two"
        barClass="logo-bar-two"
        sliderClass="slider bar-right"
        direction="right"
        logos2={logos2}
        setLogos={setLogos2}
      />
    </div>
  );
};

export default Skills;
