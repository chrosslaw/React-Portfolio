import { useState } from "react";
import myPhoto from "../../img/photos/me/chris-no-bg.png";
const About = () => {
  const [photo, setPhoto] = useState(myPhoto);
  const [clickCount, setClickCount] = useState(0);
  const images = [];
  function importAll(img) {
    img.keys().forEach((key) => images.push(img(key)));
  }
  importAll(
    require.context("../../img/photos/me/", false, /\.(png|jpe?g|svg)$/)
  );

  const handleClick = () => {
    let randomNumber = Math.floor(Math.random() * images.length);
    let newPhoto = images[randomNumber];
    setPhoto(newPhoto);
    setClickCount(clickCount + 1);
  };

  return (
    <>
      <div className="bg1"></div>
      <div className="about-background">
        <div className="about-text">
          <p>
            This React App will hopefully display my creativity and some of the
            skills I’ve learned in college and my free time. I started
            programming in 2019 and can not get enough, and I am open to
            freelance work or even new career opportunities. My preferred
            languages are Python, Javascript, and C#, and I would love to start
            a software or web development career. Check out the skills tab for a
            complete skills and language knowledge list.
          </p>
          <br />
          {clickCount === 0 && (
            <h2 className="click-change-message">
              {" "}
              Click me for a transformation!{" "}
            </h2>
          )}
          {clickCount > 2 && clickCount < 8 && (
            <h2 className="click-change-message">Cool, huh?</h2>
          )}
          {clickCount > 10 && clickCount < 14 && (
            <h2 className="click-change-message">
              I guess you are having fun!
            </h2>
          )}
          {clickCount > 17 && clickCount < 20 && (
            <h2 className="click-change-message">Alright, that's enough.</h2>
          )}
          {clickCount > 22 && (
            <h2 className="click-change-message">Really....</h2>
          )}
        </div>

        <div id="profile-pic-container">
          <img src={photo} alt="My profile pic" onClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default About;
