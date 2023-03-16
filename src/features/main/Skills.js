import LogoBar from "../logo-bar/LogoBar";

const Skills = () => {
  return (
    <div className="skills-container">
      <LogoBar
        speed={1.1}
        size={80}
        logoClass="logo"
        barClass="logo-bar"
        sliderClass="slider"
        direction="left"
      />
      <LogoBar
        speed={2.2}
        size={160}
        logoClass="logo-two"
        barClass="logo-bar-two"
        sliderClass="slider bar-right"
        direction="right"
      />
    </div>
  );
};

export default Skills;
