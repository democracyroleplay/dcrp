import { useEffect, useState } from "react";
import LogoS from "../../assets/images/democratic_logo.png";
import "./Logo.scss";

const Logo = () => {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setOpacity(1)
    }, 6000)
  }, [])
  return (
    <div className="logo-container">
      <div className="background"></div>
      <img className="solid-logo" src={LogoS} style={{opacity: opacity}} alt="solid logo" />
    </div>
  );
};

export default Logo;
