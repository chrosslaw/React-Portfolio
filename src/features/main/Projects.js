import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import redditChargedLogo from "../../img/reddit-charged/favicon.png";
import chrossTechLogo from "../../img/chrosstech/C.svg";
import comingSoonImage from "../../img/comingsoon.jpg";
import nextRedditLogo from "../../img/next-reddit/logo.png";

const Projects = () => {
  return (
    <>
      <div className="projects-container"></div>
      <Card sx={{ maxWidth: 250, margin: 2 }} variant="elevation">
        <CardActionArea href="https://redditcharged.chrosstech.com">
          <CardMedia
            className="card"
            component="img"
            height="140"
            image={redditChargedLogo}
            alt="reddit-charged app"
          />
          <CardContent className="card">
            <Typography gutterBottom variant="h5" component="div">
              Reddit-Charged App
            </Typography>
            <Typography variant="body1">
              A Reddit app built with React-Redux using RTK Queries
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 250, margin: 2 }} variant="elevation">
        <CardActionArea href="https://chrosstech.com">
          <CardMedia
            className="card"
            component="img"
            height="140"
            image={chrossTechLogo}
            alt="ChrossTech Next.js App"
          />
          <CardContent className="card">
            <Typography gutterBottom variant="h5" component="div">
              ChrossTech App
            </Typography>
            <Typography variant="body1">
              A showcasing of all my Next.JS React apps.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 250, margin: 2 }} variant="elevation">
        <CardActionArea>
          <CardMedia
            className="card"
            component="img"
            height="140"
            alt="Coming Soon Image"
            image={comingSoonImage}
          />

          <CardContent className="card">
            <Typography gutterBottom variant="h5" component="div">
              Next.Reddit App
            </Typography>
            <Typography variant="body1">
              {" "}
              React app built with Next.JS and the Reddit API.{" "}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 250, margin: 2 }} variant="elevation">
        <CardActionArea>
          <CardMedia
            className="card"
            component="img"
            height="140"
            alt="Coming Soon Image"
            image={nextRedditLogo}
          />

          <CardContent className="card">
            <Typography gutterBottom variant="h5" component="div">
              Coming Soon!
            </Typography>
            <Typography variant="body1">
              {" "}
              New projects are under construction.{" "}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
export default Projects;
