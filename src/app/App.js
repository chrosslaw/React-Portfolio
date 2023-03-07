import React, { useState } from "react";
import "./App.css";
import "./webkit-styles.css";
import Header from "../features/header/Header";
import Footer from "../features/footer/Footer";
import Main from "../features/main/Main";
// import LogoBar from "../features/logo-bar/LogoBar";

function App() {
  const [activePage, setActivePage] = useState("about");
  return (
    <div>
      <Header setActivePage={setActivePage} />
      <Main activePage={activePage} />
      {/* <LogoBar /> */}
      <Footer />
    </div>
  );
}

export default App;
