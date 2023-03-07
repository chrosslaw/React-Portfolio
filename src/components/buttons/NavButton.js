import React from "react";

const NavButton = ({ buttonName, activeButton, onClick }) => {
  const isActive = buttonName === activeButton;

  return (
    <button
      className={`nav-button ${isActive ? "active" : "not-active"}`}
      onClick={() => onClick(buttonName)}
    >
      <b>{buttonName}</b>
    </button>
  );
};

export default NavButton;
