import React, { Suspense } from 'react';
import "./App.css";
import Home from "./components/Home";
import Icons from "./components/Icons"; 
import Project from "./components/Project"; 
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ProjectPage from "./components/ProjectPage";
import Work from "./components/Work";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Preloader from "./logo.svg";
import Footer from "./components/Footer";
import ReactGA from 'react-ga';

const trackingId = "G-FEEF56KLBW"; 
ReactGA.initialize(trackingId);

ReactGA.send({
  hitType: 'pageview',
  eventCategory: 'User',
  eventAction: 'Visit',
  eventLabel: 'Homepage',
  page: window.location.pathname,
});

function App() {
  return (
    <Suspense fallback={<img src={Preloader} alt="Loading..." />}>
      <div className="App">
        <header className="App-header">
            <Parallax pages={10} style={{ top: "0", left: "0" }}>
              <ParallaxLayer
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Home />
              </ParallaxLayer>
              <ParallaxLayer offset={1}>
                <About /> 
              </ParallaxLayer>
              <ParallaxLayer offset={2}>
                <Work/>
              </ParallaxLayer>
              <ParallaxLayer offset={4}>
                <ProjectPage/>
              </ParallaxLayer>
              <ParallaxLayer offset={7.75}>
                <Gallery />
              </ParallaxLayer>
              <ParallaxLayer offset={9.92}>
                <Footer />
              </ParallaxLayer>
              <ParallaxLayer sticky={{ start: 0, end: 10 }}>
                <Icons />
              </ParallaxLayer>
            </Parallax>
        </header>
      </div>
    </Suspense>
  );
}

export default App;
