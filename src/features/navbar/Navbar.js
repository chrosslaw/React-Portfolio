import NavButton from "../../components/buttons/NavButton";

const NavBar = () => {
  return (
    <nav className="nav">
      <NavButton buttonName="About" />
      <NavButton buttonName="Skills" />
      <NavButton buttonName="Projects" />
    </nav>
  );
};
export default NavBar;
