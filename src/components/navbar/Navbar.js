import NavButton from "../buttons/NavButton";

const NavBar = ({ activeButton, onButtonClick }) => {
  return (
    <nav className="nav">
      <NavButton
        buttonName="About"
        activeButton={activeButton}
        onClick={onButtonClick}
      />
      <NavButton
        buttonName="Skills"
        activeButton={activeButton}
        onClick={onButtonClick}
      />
      <NavButton
        buttonName="Projects"
        activeButton={activeButton}
        onClick={onButtonClick}
      />
    </nav>
  );
};
export default NavBar;
