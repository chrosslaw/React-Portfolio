import { useState } from "react";
import Logo from "../../img/logo.png";
import NavBar from "../../components/navbar/Navbar";

const Header = ({ setActivePage, activePage }) => {
  const [activeButton, setActiveButton] = useState("About");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setActivePage(buttonName);
  };

  return (
    <header className="App-header">
      <div>
        <div>
          <img src={Logo} className="App-logo" alt="Chrosslaw brand logo" />
        </div>
      </div>
      <NavBar
        activePage={activePage}
        activeButton={activeButton}
        onButtonClick={handleButtonClick}
      />
    </header>
  );
};
export default Header;
