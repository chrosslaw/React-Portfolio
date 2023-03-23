import LogoBar from "../logo-bar/LogoBar";

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
          <Box sx={{ color: "text.secondary", mt: 1, p: 1 }}>
            I came across another website that had a sliding logo bar like this
            and had to try and replicate it with some alterations.
          </Box>
          <Box sx={{ color: "text.secondary", mt: 1 }}>
            Please see click here for a non-interactive list of skills.
          </Box>
        </Box>
      </ThemeProvider>

      <div className="skills-container ">
        <LogoBar
          speed={1.8}
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
