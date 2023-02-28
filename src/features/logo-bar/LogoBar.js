import { useState, useEffect } from "react";
import Logo from "./Logo";

const LogoBar = () => {
  const [logos, setLogos] = useState([]);

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
      var logoBar = document.getElementById("logo-bar");
      var logos = logoBar.getElementsByTagName("img");
      var speed = 2;
      var pos = -100;

      function updateLogos() {
        pos += speed;
        for (var i = 0; i < logos.length; i++) {
          logos[i].style.left = pos + i * 120 + "px";
          if (pos + i * 120 > logoBar.offsetWidth) {
            pos = -i * 120;
          }
        }
      }

      const intervalId = setInterval(updateLogos, 10);

      return () => clearInterval(intervalId);
    }

    if (logos.length > 0) {
      moveLogos();
    }
  }, [logos]);

  return <div id="logo-bar">{logos}</div>;
};

export default LogoBar;
