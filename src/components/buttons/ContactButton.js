import React from "react";
const ContactButton = ({ contactCardShowing, setContactCardShowing }) => {
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
