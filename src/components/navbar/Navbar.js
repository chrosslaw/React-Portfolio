import NavButton from "../buttons/NavButton";

const NavBar = ({ activeButton, onButtonClick, activePage }) => {
  return (
    <nav className="nav">
      <NavButton
        buttonName="About"
        activeButton={activeButton}
        onClick={onButtonClick}
        activePage={activePage}
      />
      <NavButton
        buttonName="Skills"
        activeButton={activeButton}
        onClick={onButtonClick}
        activePage={activePage}
      />
      <NavButton
        buttonName="Projects"
        activeButton={activeButton}
        onClick={onButtonClick}
        activePage={activePage}
      />
    </nav>
  );
};
export default NavBar;
