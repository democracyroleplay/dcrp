import "./Sidebar.scss";
import { useState } from "react";
import LogoS from "../assets/images/democratic_logo.png";
import LogoSubtitle from "../assets/images/textLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faBars,
  faRegistered,
  faBookOpen,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link className="logo" to="/dcrp" onClick={() => setShowNav(false)}>
        <img className="navLogo" src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav className={showNav ? "mobile-show" : ""}>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
        <NavLink
          exact="true"
          activeclassname="active"
          to="/dcrp"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="rules-link"
          to="/Rules"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faBookOpen} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="register-link"
          to="/Register"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faRegistered} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://discord.gg/XG5ut2GZbP"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faDiscord}
              color="#00ffb3"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@omesh.s"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#00ffb3"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/democracy._.community/">
            <FontAwesomeIcon
              icon={faInstagram}
              color="#00ffb3"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  );
};

export default Sidebar;
