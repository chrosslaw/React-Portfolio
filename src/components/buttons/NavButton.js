import React from "react";
import "./Buttons.css";
const NavButton = ({ buttonName }) => {
  return (
    <button className="nav-button">
      <b>{buttonName}</b>
    </button>
  );
};
export default NavButton;