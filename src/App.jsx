// App.js
import React, { useRef,useEffect } from "react";
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
import { Helmet } from "react-helmet";



function App() {
useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);  

  // Scroll to the target [Toolos Container]
  const targetRef = useRef(null);
  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ButtonProvider>
      <Helmet>
        <title>Free Tools for Web Developers | Inspiration, Design, Assets, CSS tools & More</title>
        <meta name="description" content="Discover a curated collection of free tools and resources for web developers — including inspirational websites, assets, CSS tools, and optimization tools — all in one place." />
        <meta name="keywords" content="web development tools, free developer tools, icons, fonts, inspiration, design resources, web design" />
        <meta name="author" content="Walaa Ayyad" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Container fluid>
        <div className="bg-circle bg-left-circle"></div>
        <div className="bg-circle bg-right-circle"></div>
        <NavBar />
        <Hero />
        <ButtonsBox onClick={scrollToTarget}/>
        <ToolsBox targetRef={targetRef}/>
        <Footer/>    
      </Container>
    </ButtonProvider>
  );
}

export default App;


