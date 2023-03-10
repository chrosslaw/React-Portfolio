import { useState } from "react";
import { Button } from "@mui/material";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";

const Footer = () => {
  const [contactBoxVisible, setContactBoxVisible] = useState(false);

  const handleContactButtonClick = () => {
    setContactBoxVisible(!contactBoxVisible);
  };

  return (
    <footer className="App-footer">
      <div id="contact-box" className="bounce-in-top text-focus-in">
        <span>
          {contactBoxVisible && (
            <a
              id="email"
              href="mailto:chris@chrosslaw.com"
              className="text-focus-in"
            >
              <ContactMailRoundedIcon color="primary" /> CHRIS@CHROSSLAW.COM
            </a>
          )}
        </span>
        <br />
      </div>

      <div className="contact-button">
        <Button
          onClick={handleContactButtonClick}
          variant="contained"
          size="large"
        >
          <ContactPageIcon /> Contact
        </Button>
      </div>

      <div className="footer-bottom">
        {/* eslint-disable-next-line */}
        <a
          title="My Dribble Page"
          id="dribble"
          className="fa fa-dribbble fa-bounce fa-2x"
          href="https://dribbble.com/chrosslaw"
          target="_blank"
        >
          <i> </i>
        </a>
        <a
          href="https://github.com/chrosslaw"
          rel="noreferrer"
          target="_blank"
          title="My Github Page"
          className="fa-brands fa-github fa-spin-pulse fa-2x"
        >
          <i> </i>
        </a>
        <a
          href="https://www.linkedin.com/in/chris-lawrence-99627554"
          rel="noreferrer"
          target="_blank"
          title="My linkedin Page"
          className="fa fa-linkedin fa-shake fa-2x"
        >
          <i> </i>
        </a>
        <a
          href="https://www.facebook.com/chrossl"
          target="_blank"
          rel="noreferrer"
          title="My facebook Page"
          className="fa fa-facebook fa-flip fa-2x"
        >
          <i> </i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
