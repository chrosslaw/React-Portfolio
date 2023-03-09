import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
const Main = ({ activePage }) => {
  return (
    <main className={`main ${activePage}`}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" fixed>
          <Box sx={{ bgcolor: "#ffffff", height: "100vh" }} />
        </Container>
      </React.Fragment>
    </main>
  );
};
export default Main;
