import { useState, useEffect, useRef } from "react";
import Logo from "./Logo";

const LogoBar = () => {
  const [logos, setLogos] = useState([]);
  const sliderRef = useRef(null);
  const logoWidth = 120; // width of each logo element

  useEffect(() => {
    const logoPaths = require
      .context("../../img/logos", false, /\.(png|jpe?g|svg)$/)
      .keys();
    Promise.all(
      logoPaths.map((path) => import(`../../img/logos/${path.slice(2)}`))
    )
      .then((modules) => {
        setLogos(
          modules.map((module, i) => (
            <Logo
              src={module.default}
              alt={logoPaths[i]}
              key={logoPaths[i]}
              onLoad={() => console.log(`Loaded logo: ${logoPaths[i]}`)}
            />
          ))
        );
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    function moveLogos() {
      const slider = sliderRef.current;

      let pos = 0;

      function updateLogos() {
        pos -= 1;

        if (pos <= -logoWidth) {
          pos += logoWidth;
          slider.appendChild(slider.firstChild);
        }

        slider.style.transform = `translateX(${pos}px)`;
      }

      const intervalId = setInterval(updateLogos, 10);

      return () => clearInterval(intervalId);
    }

    if (logos.length > 0) {
      moveLogos();
    }
  }, [logos]);

  return (
    <div className="logo-bar">
      <div className="slider" ref={sliderRef}>
        {logos.map((logo, i) => (
          <div className="logo" key={i}>
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoBar;
