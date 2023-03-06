import React from "react";
import "./Buttons.css";
const ContactButton = ({
  contactCardShowing,
  setContactCardShowing,
  contact,
}) => {
  return (
    <button
      className="contact-button"
      onClick={() => {
        setContactCardShowing(!contactCardShowing);
      }}
    >
      <b>Contact</b>
    </button>
  );
};
export default ContactButton;
