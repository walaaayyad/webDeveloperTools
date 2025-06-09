import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/1-navBar";
import Hero from "./components/2-heroSection";
import ButtonsBox from "./components/3-buttonsBox";
import ToolsBox from "./components/5-toolsBox";
import Footer from "./components/6-footer";
import { ButtonProvider } from "./ButtonContext"; // Import the provider
import AOS from 'aos';
import 'aos/dist/aos.css';
import './i18n';
import { Helmet, HelmetProvider } from "react-helmet-async";



function App() {
//----------------- AOS Animation ------------------  
useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);  

//---------------- Scroll to the target [Tools box] ------------
  const targetRef = useRef(null);
  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

//----------------- Handle Scrollup Button ----------------
const [scrollUp, setScrollUp] = useState(false);  
  useEffect(() => {
  const handleScroll = () => {
    setScrollUp(window.scrollY > 600);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <ButtonProvider>
      <HelmetProvider>
        <Helmet>
          <title>Free Tools for Web Developers | Inspiration, Design, Assets, CSS tools & More</title>
          <meta name="description" content="Discover a curated collection of free tools and resources for web developers — including inspirational websites, assets, CSS tools, and optimization tools — all in one place." />
          <meta name="keywords" content="web development tools, free developer tools, icons, fonts, inspiration, design resources, web design" />
          <meta name="author" content="Walaa Ayyad" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://walaaayyad.github.io/webDeveloperTools/" /> 
          <meta property="og:title" content="Free Tools for Web Developers" />
          <meta property="og:description" content="Curated free tools and resources for web developers including design, CSS, optimization, and inspiration." />
          <meta property="og:image" content="https://walaaayyad.github.io/webDeveloperTools/heroImg2.png" /> 

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://walaaayyad.github.io/webDeveloperTools/" /> 
          <meta name="twitter:title" content="Free Tools for Web Developers" />
          <meta name="twitter:description" content="Curated free tools and resources for web developers including design, CSS, optimization, and inspiration." />
          <meta name="twitter:image" content="https://walaaayyad.github.io/webDeveloperTools/heroImg2.png" /> 
        </Helmet>

        <Container fluid>
          <div id='up' className="top-page-target"></div>
          <div className="bg-circle bg-left-circle"></div>
          <div className="bg-circle bg-right-circle"></div>
          <NavBar />
          <Hero />
          <ButtonsBox onClick={scrollToTarget}/>
          <ToolsBox targetRef={targetRef}/>
          <a href="#up" style={{opacity: scrollUp ? 1 : 0, transition: "1s"}}>
          <button className='scroll-up pt-1'>⌃</button>
          </a>
          <Footer/>    
        </Container>
      </HelmetProvider>
    </ButtonProvider>
  );
}

export default App;


