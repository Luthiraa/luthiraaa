import React, { Suspense, useEffect } from 'react';
import "./App.css";
import Home from "./components/Home";
import Icons from "./components/Icons"; 
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ProjectPage from "./components/ProjectPage";
import Work from "./components/Work";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Preloader from "./logo.svg";
import Footer from "./components/Footer";
import ReactGA from 'react-ga';
import Email from './components/Email';
const trackingId = "G-FEEF56KLBW"; 
ReactGA.initialize(trackingId);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  const end = 14.1;
  return (
    <Suspense fallback={<img src={Preloader} alt="Loading..." />}>
      <div className="App">
        <header className="App-header">
            
            <Parallax pages={end} style={{ top: "0", left: "0" }}>
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
              <ParallaxLayer offset={4.5}>
                <ProjectPage/>
              </ParallaxLayer>
              <ParallaxLayer offset={10.6}>
                <Gallery />
              </ParallaxLayer>
              <ParallaxLayer offset={end - 0.1}>
                <Footer />
              </ParallaxLayer>
              <ParallaxLayer sticky={{ start: 0, end: end}}>
                <Icons />
                <Email />
              </ParallaxLayer>
            </Parallax>
        </header>
      </div>
    </Suspense>
  );
}

export default App;