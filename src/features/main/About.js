import React from "react";
import myPhoto from "../../img/photos/chris-no-bg.png";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const ResponsiveImage = styled(CardMedia)`
  width: 100%;
  height: auto;

  @media (min-width: 600px) {
    max-width: 400px;
    margin: 0 auto;
  }

  @media (min-width: 960px) {
    max-width: 600px;
  }
`;

const About = () => {
  return (
    <div className="about-background">
      <div>
        <ResponsiveImage component="img" image={myPhoto} alt="My Photo" />
      </div>
    </div>
  );
};

export default About;
