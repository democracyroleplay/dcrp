import { Route, Routes } from "react-router-dom";
import Home from "./components/index";
import Layout from "./Layout/Layout.js";
import "./App.scss";
import { useState, useEffect } from "react";
import logoVideo from "./assets/videos/logo.mp4";
import Rules from "./components/rules/Rules";
import ComingSoon from "./components/commingSoon/ComingSoon";
import NotFound from "./components/NotFound/NotFound"

function App() {
  const [explore, isExplored] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 4500);
  }, []);

  return (
    <>
      {!explore ? (
        <div className="parentContainer">
          <div className="firstBox">
            <video
              muted
              autoPlay
              playsInline
              width="100%"
              height="100%"
              src={logoVideo}
              className="background-video"
            />
            {showButton && (
              <button
                className="centered-button"
                onClick={() => isExplored(true)}
              >
                Explore
              </button>
            )}
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/dcrp" element={<Home />} />
            <Route path="/Rules" element={<Rules />} />
            <Route path="/Register" element={<ComingSoon />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
