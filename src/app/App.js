import React from "react";
import "./App.css";
import "./webkit-styles.css";
import Header from "../features/header/Header";
import Footer from "../features/footer/Footer";
import Main from "../features/main/Main";
// import LogoBar from "../features/logo-bar/LogoBar";

function App() {
  return (
    <div>
      <Header />
      <Main />
      {/* <LogoBar /> */}
      <Footer />
    </div>
  );
}

export default App;
