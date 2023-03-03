import NavButton from "../buttons/NavButton";

const NavBar = ({ active, setActive }) => {
  return (
    <nav className="nav">
      <NavButton buttonName="About" />
      <NavButton buttonName="Skills" />
      <NavButton buttonName="Projects" />
    </nav>
  );
};
export default NavBar;
