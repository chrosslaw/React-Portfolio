import { useState, useEffect, useRef } from "react";
import Logo from "./Logo";

const LogoBar = ({ speed, size, direction }) => {
  const [logos, setLogos] = useState([]);
  const sliderRef = useRef(null);

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
              size={size}
              onLoad={() => console.log(`Loaded logo: ${logoPaths[i]}`)}
            />
          ))
        );
      })
      .catch((err) => console.error(err));
  }, [size]);

  useEffect(() => {
    function moveLogos() {
      const slider = sliderRef.current;
      const logoWidth = size * 1.5; // width of each logo element
      let pos = 0;

      function updateLogos() {
        if (direction === "left") {
          pos -= speed;
        } else {
          pos += speed;
        }

        if (pos <= -logoWidth) {
          pos += logoWidth;
          slider.appendChild(slider.firstChild);
        } else if (pos >= 0) {
          pos -= logoWidth;
          slider.insertBefore(slider.lastChild, slider.firstChild);
        }

        slider.style.transform = `translateX(${pos}px)`;
      }

      const intervalId = setInterval(updateLogos, 30);

      return () => clearInterval(intervalId);
    }

    if (logos.length > 0) {
      moveLogos();
    }
  }, [logos, speed, size, direction]);

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
