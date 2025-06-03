// App.js
import React, { useRef,useEffect } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/1-navBar";
import Hero from "./components/2-heroSection";
import ButtonsBox from "./components/3-buttonsBox";
import ToolsBox from "./components/5-toolsBox";
import Footer from "./components/6-footer";
import OffCanvas from "./components/4-offCanvas";
import { ButtonProvider } from "./ButtonContext"; // Import the provider
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      {/* <Container className="border border-danger"> */}
        <div className="bg-circle bg-left-circle"></div>
        <div className="bg-circle bg-right-circle"></div>
        {/* <div className="bg-circle bg-middle-circle"></div> */}
        <NavBar />
        <Hero />
        <ButtonsBox onClick={scrollToTarget}/>
        <ToolsBox targetRef={targetRef}/>
        <Footer/>
        {/* <OffCanvas onButtonClick={handleScrollToData} />  */}
       
    </ButtonProvider>
  );
}

export default App;

//design-----[https://dribbble.com/shots/20184234-Metaverse-Education-Website-UI-UX-Design]
