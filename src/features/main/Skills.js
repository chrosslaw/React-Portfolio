import LogoBar from "../logo-bar/LogoBar";

const Skills = () => {
  return (
    <div className="skills-container ">
      <div className="bg1">
        <LogoBar
          speed={2}
          size={130}
          logoClass="logo"
          barClass="logo-bar"
          sliderClass="slider"
          direction="left"
        />
      </div>
    </div>
  );
};

export default Skills;
