import React, { useState, useCallback } from "react";
import "./ComingSoon.css";
import AnimatedLetters from "../../AnimatedLetters";
import Loader from "react-loaders";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Timer from "../Timer/Timer";

const ComingSoon = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
  }, []);

  const array = [
    "S",
    "E",
    "R",
    "V",
    "E",
    "R",
    ' ',
    " ",
    "U",
    "N",
    "D",
    "E",
    "R",
    " ",
    "D",
    "E",
    "V",
    ' ',
    " ",
    "M",
    "O",
    "D",
    "E",
    ' ',
    " ",
    "S",
    "T",
    "A",
    "Y",
    " ",
    " ",
    "T",
    "U",
    "N",
    "E",
    "D",
    ".",
    ".",
    ".",
  ];
  const letterClass = "text-animate";
  
  const TargetData = new Date('2023-11-10T17:59:59')

  return (
    <>
      <div className="comingSoonBox">
      <AnimatedLetters
              letterClass={letterClass}
              strArray={array}
              idx={8}
              val={"0"}
              className={"server-status"}
            />
        <Loader type="pacman" />
      </div>
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
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0, max: 1 },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
};

export default ComingSoon;
