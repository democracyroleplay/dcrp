import { useEffect, useState } from "react";
import LogoS from "../../assets/images/democratic_logo.png";
import "./Logo.scss";
import Timer from "../Timer/Timer";

const Logo = () => {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setOpacity(1)
    }, 6000)
  }, [])
  const TargetData = new Date('2023-11-10T17:59:59')
  return (
    <div className="logo-container">
      <div className="background"></div>
      <img className="solid-logo" src={LogoS} style={{opacity: opacity}} alt="solid logo" />
      <p className="tagLine" style={{textDecoration: 'underline'}}>Let The People Rule Once...</p>
    </div>
  );
};

export default Logo;
