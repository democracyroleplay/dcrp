import React, { useCallback, useState } from "react";
import "./Rules.css";
import rulesData from "../../rulesData/rules.json";
import rpRules from "../../rulesData/rpRules.json";
import pdCivilianRules from "../../rulesData/pdCivilianRules.json";
import exclusiveRules from "../../rulesData/exclusiveRules.json";
import Loader from "react-loaders";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Rules = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  const [activeRule, setActiveRule] = useState(0);

  return (
    <>
      <div class="rules active">
        <div className="pageTitle">
          <p
            class="rules-title"
            style={{
              textDecoration: activeRule === 0 ? "underline" : null,
              cursor: "pointer",
            }}
            onClick={() => setActiveRule(0)}
          >
            General Rules
          </p>
          <p
            class="rules-title"
            style={{
              textDecoration: activeRule === 3 ? "underline" : null,
              cursor: "pointer",
            }}
            onClick={() => setActiveRule(3)}
          >
            Democracy Exclusive
          </p>
          <p
            class="rules-title"
            style={{
              textDecoration: activeRule === 1 ? "underline" : null,
              cursor: "pointer",
            }}
            onClick={() => setActiveRule(1)}
          >
            Roleplay Rules
          </p>
          <p
            class="rules-title"
            style={{
              textDecoration: activeRule === 2 ? "underline" : null,
              cursor: "pointer",
            }}
            onClick={() => setActiveRule(2)}
          >
            PD Civilian interaction Rules
          </p>
        </div>
        <div class="gradient-cards">
          {activeRule === 0
            ? rulesData.rules.map((item) => (
                <div class="card">
                  {" "}
                  <div class="rules-card bg-green-box">
                    <p class="card-title">{item.title}</p>
                    <p class="card-description">{item.description}</p>
                  </div>
                </div>
              ))
            : null}
          {activeRule === 1
            ? rpRules.rules.map((item) => (
                <div class="card">
                  {" "}
                  <div class="rules-card bg-green-box">
                    <p class="card-title">{item.title}</p>
                    <p class="card-description">{item.description}</p>
                  </div>
                </div>
              ))
            : null}
          {activeRule === 2
            ? pdCivilianRules.rules.map((item) => (
                <div class="card">
                  {" "}
                  <div class="rules-card bg-green-box">
                    <p class="card-title">{item.title}</p>
                    <p class="card-description">{item.description}</p>
                  </div>
                </div>
              ))
            : null}
          {activeRule === 3
            ? exclusiveRules.rules.map((item) => (
                <div class="card">
                  {" "}
                  <div class="rules-card bg-green-box">
                    <p class="card-title">{item.title}</p>
                    <p class="card-description">{item.description}</p>
                  </div>
                </div>
              ))
            : null}
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
