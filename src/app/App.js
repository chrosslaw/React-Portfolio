import React, { useState } from "react";
import "./App.css";
import "./webkit-styles.css";
import Header from "../features/header/Header";
import Footer from "../features/footer/Footer";
import Main from "../features/main/Main";

function App() {
  const [activePage, setActivePage] = useState("About");
  return (
    <div className="App">
      <Header setActivePage={setActivePage} activePage={activePage} />

      <Main activePage={activePage} />

      <Footer />
    </div>
  );
}

export default App;
