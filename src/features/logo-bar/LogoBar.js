import { useEffect, useRef } from "react";
import Logo from "./Logo";

const LogoBar = ({
  speed,
  size,
  direction,
  barClass,
  sliderClass,
  logoClass,
  logos,
  setLogos,
  setLogos2,
}) => {
  const sliderRef = useRef(null);
  const sliderRef2 = useRef(null);
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
              logoClass={logoClass}
              size={size}
              onLoad={() => console.log(`Loaded logo: ${logoPaths[i]}`)}
            />
          ))
        );
      })
      .catch((err) => console.error(err));
  }, [logoClass, size]);

  useEffect(() => {
    function moveLogos() {
      const slider = sliderRef.current;
      const slider2 = sliderRef2.current;
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
          const newLogos = [...logos];
          const removedLogo = newLogos.shift();
          setLogos(newLogos);
          setLogos2((prevLogos) => [...prevLogos, removedLogo]);
        }

        slider.style.transform = `translateX(${pos}px)`;
        slider2.style.transform = `translateX(${pos}px)`;
      }

      const intervalId = setInterval(updateLogos, 30);

      return () => clearInterval(intervalId);
    }

    if (logos.length > 0) {
      moveLogos();
    }
  }, [logos, speed, size, direction, setLogos]);

  return (
    <div className={barClass}>
      <div className={sliderClass} ref={sliderRef}>
        {logos.map((logo, i) => (
          <div className={logoClass} key={i}>
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoBar;
