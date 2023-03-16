import React from "react";

const Logo = ({ src, logoClass }) => {
  return <img className={logoClass} src={src} alt="Logo" />;
};

export default Logo;
