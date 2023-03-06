import React from "react";
import "./Buttons.css";
const ContactButton = ({ contactCardShowing, onClick }) => {
  return (
    <button className="contact-button" onClick={onClick}>
      <b>Contact</b>
    </button>
  );
};
export default ContactButton;
