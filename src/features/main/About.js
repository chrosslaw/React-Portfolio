// import React, { useEffect, useState } from "react";
import myPhoto from "../../img/photos/chris-no-bg.png";
import { Paper, CardMedia } from "@mui/material";
import { styled } from "@mui/material/styles";

const ResponsiveImage = styled(CardMedia)`
  width: 50%;
  height: auto;
  left: 0;
  bottom: 0;

  @media (min-width: 600px) {
    width: 70%;
  }

  @media (min-width: 960px) {
    width: 90%;
  }
`;

const About = () => {
  // const [text, setText] = useState("");

  return (
    <div className="about-background">
      <div>
        <div>
          <ResponsiveImage component="img" image={myPhoto} alt="My Photo" />
        </div>
        <div>
          <Paper className="about-text">
            This input is only a test of the about text styling! This input is
            only a test of the about text styling!This input is only a test of
            the about text styling!
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default About;
