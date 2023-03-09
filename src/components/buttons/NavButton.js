import React from "react";

const NavButton = ({ buttonName, activeButton, onClick, activePage }) => {
  const isActive = buttonName === activeButton;

  return (
    <button
      className={`nav-button ${activePage} ${
        isActive ? `active` : "not-active"
      }`}
      onClick={() => onClick(buttonName)}
    >
      <b>{buttonName}</b>
    </button>
  );
};

export default NavButton;
