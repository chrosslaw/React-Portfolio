import Logo from "../../img/logo.png";
import NavBar from "../navbar/Navbar";

const Header = () => {
  return (
    <header className="App-header">
      <div>
        <div>
          <img src={Logo} className="App-logo" alt="Chrosslaw brand logo" />
        </div>
      </div>
      <NavBar />
    </header>
  );
};
export default Header;
