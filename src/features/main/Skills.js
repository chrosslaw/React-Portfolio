import LogoBar from "../logo-bar/LogoBar";
import resume from "../../resources/Christopher Lawrence Resume 2023.pdf";
import { Box, ThemeProvider, createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#000000",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

const Skills = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box className="skill-box">
          <Box
            sx={{
              color: "text.secondary",
              mt: 5,
              p: 1,
              bgcolor: "text.background",
            }}
          >
            I came across another website that had a sliding logo bar like this
            and had to try and replicate it with some alterations to showcase my
            skills. Additionally, I designed these tab-like pages to simulate
            sifting through a file cabinet. Please, feel free to let me know
            what you think.
          </Box>
          <Box sx={{ color: "text.secondary", pb: 1 }}>
            Please see click{" "}
            <a href={resume} target="_blank" rel="noreferrer">
              here
            </a>{" "}
            to see my resume with a non-interactive list of skills.
          </Box>
        </Box>
      </ThemeProvider>

      <div className="skills-container ">
        <LogoBar
          speed={1.8}
          size={108}
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
