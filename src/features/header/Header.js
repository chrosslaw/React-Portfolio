import Logo from "../../img/logo.png";

const Header = () => {
  return (
    <header>
      <div className="App-header">
        <div>
          <img src={Logo} className="App-logo" alt="Chrosslaw brand logo" />
        </div>
      </div>
    </header>
  );
};
export default Header;
