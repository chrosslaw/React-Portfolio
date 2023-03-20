import { useState } from "react";
import myPhoto from "../../img/photos/me/chris-no-bg.png";
const About = () => {
  const [photo, setPhoto] = useState(myPhoto);

  const images = [];
  function importAll(img) {
    img.keys().forEach((key) => images.push(img(key)));
  }
  importAll(
    require.context("../../img/photos/me/", false, /\.(png|jpe?g|svg)$/)
  );

  const handleClick = () => {
    let randomNumber = Math.floor(Math.random() * images.length);
    console.log(randomNumber);
    let newPhoto = images[randomNumber];
    setPhoto(newPhoto);
  };

  return (
    <div className="about-background">
      <div className="about-text">
        <p>
          This input is only a test of the about text styling! This input is
          only a test of the about text styling!This input is only a test of the
          about text styling!
        </p>
      </div>
      <div id="profile-pic-container">
        <img src={photo} alt="My profile pic" onClick={handleClick} />
      </div>
    </div>
  );
};

export default About;
