// import React, { useEffect, useState } from "react";
import myPhoto from "../../img/photos/chris-no-bg.png";

const About = () => {
  // const [text, setText] = useState("");

  return (
    <div className="about-background">
      <div className="about-text">
        <p>
          This input is only a test of the about text styling! This input is
          only a test of the about text styling!This input is only a test of the
          about text styling!
        </p>
      </div>
      <div id="profile-pic-container">
        <img src={myPhoto} alt="My profile pic" />
      </div>
    </div>
  );
};

export default About;
