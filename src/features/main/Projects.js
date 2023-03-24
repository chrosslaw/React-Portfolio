import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import redditChargedLogo from "../../img/reddit-charged/favicon.png";

const Projects = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={redditChargedLogo}
            alt="reddit-charged app"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Reddit-Charged App
            </Typography>
            <Typography variant="body1">
              A Reddit app built with React-Redux using RTK Queries
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
export default Projects;
