import { useState } from "react";
import ContactButton from "../../components/buttons/ContactButton";

const Footer = () => {
  const { contactCardShowing, setContactCardShowing } = useState(false);
  return (
    <footer className="App-footer">
      <div className="footer-top">
        <ContactButton
          setContactCardShowing={setContactCardShowing}
          contactCardShowing={contactCardShowing}
        />
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
