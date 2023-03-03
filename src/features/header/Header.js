import { useState } from "react";
import Logo from "../../img/logo.png";
import NavBar from "../../components/navbar/Navbar";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header className="App-header">
      <div>
        <div>
          <img src={Logo} className="App-logo" alt="Chrosslaw brand logo" />
        </div>
      </div>
      <NavBar active={active} setActive={setActive} />
    </header>
  );
};
export default Header;
