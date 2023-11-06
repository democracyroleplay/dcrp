import React, { useCallback } from "react";
import "./Rules.css";
import rulesData from "../../rulesData/rules.json";
import Loader from "react-loaders";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Rules = () => {

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
  }, []);


  return (
    <>
      <div class="rules active">
        <p class="rules-title">Rules</p>
        <div class="gradient-cards">
          {rulesData.rules.map((item) => (
            <div class="card">
              {" "}
              <div class="rules-card bg-green-box">
                <p class="card-title">{item.title}</p>
                <p class="card-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
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
                    area: 500,
                  },
                  value: 25,
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

export default Rules;
