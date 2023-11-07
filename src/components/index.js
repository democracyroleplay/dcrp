import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import LogoTitle from "../assets/images/democratic_logo.png";
import Logo from "./logo/Logo";
import "./index.scss";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Home = () => {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    
  }, []);



  const letterClass = "text-animate";
  const playButton = ["P", "L", "A", "Y", " ", "N", "O", "W"];
  const registerButton = ["R", "E", "G", "I", "S", "T", "E", "R"];
  const nameArray = [
    "Embark ",
    "on ",
    "immersive ",
    "journeys ",
    "in ",
    "a ",
    "hyper-realistic ",
    "GTA ",
    "5 ",
    "roleplay ",
    "universe.",
  ];
  const jobArray = [
    "D",
    "E",
    "M",
    "O",
    "C",
    "R",
    "A",
    "C",
    "Y",
    " ",
    "R",
    "O",
    "L",
    "E",
    "P",
    "L",
    "A",
    "Y",
  ];

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 style={{ width: "850px" }}>
            <img src={LogoTitle} alt="logo" className="spinnerLogo" />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
              val={"10px"}
              className={"nameArray"}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
              val={"10px 5px 0"}
              className={"logoLetters"}
            />
          </h1>
          <Link to="/Register" className="flat-button">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={registerButton}
              idx={8}
              val={"0"}
              className={""}
            />
          </Link>
          <Link
            to="/Register"
            className="flat-button"
            style={{ marginLeft: "100px" }}
          >
            <AnimatedLetters
              letterClass={letterClass}
              strArray={playButton}
              idx={8}
              val={"0"}
              className={""}
            />
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fpsLimit: 144,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 300,
                    duration: 2,
                  },
                },
              },
              particles: {
                color: {
                  value: "#00ffee",
                },
                links: {
                  color: "#00ffb3",
                  distance: 120,
                  enable: true,
                  opacity: 0.3,
                  width: 1,
                },
                move: {
                  direction: "auto",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 600,
                  },
                  value: 35,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
    </>
  );
};

export default Home;
