import React, { useState, useCallback } from "react";
import "./ComingSoon.css";
import AnimatedLetters from "../../AnimatedLetters";
import Loader from "react-loaders";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ComingSoon = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
  }, []);

  const array = [
    "J",
    "O",
    "I",
    "N",
    " ",
    " ",
    " ",
    "D",
    "I",
    "S",
    "C",
    "O",
    "R",
    "D",
    " ",
    " ",
    " ",
    "T",
    "O",
    " ",
    " ",
    " ",
    "K",
    "N",
    "O",
    "W",
    " ",
    " ",
    " ",
    "M",
    "O",
    "R",
    "E",
    ".",
    ".",
    ".",
  ];
  const letterClass = "text-animate";

  return (
    <>
      <div className="comingSoonBox">
        <a className="discordLink" href="https://discord.gg/XG5ut2GZbP">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={array}
          idx={16}
          val={"0"}
          className="registerText"
        />
      </a>
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
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
};

export default ComingSoon;
