import LogoBar from "../logo-bar/LogoBar";

const Skills = () => {
  return (
    <div className="skills-container">
      <LogoBar
        speed={1.8}
        size={160}
        logoClass="logo"
        barClass="logo-bar"
        sliderClass="slider"
        direction="left"
      />
    </div>
  );
};

export default Skills;
