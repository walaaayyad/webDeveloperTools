import React, {useEffect} from "react";
import {Container, Row, Col, Image } from "react-bootstrap";
import AOS from 'aos';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next'; // To use <br/> inside text

function HeroSection() {
  useEffect(() => {
    AOS.refresh(); // Recalculate AOS positions if dynamic content is used
  }, []);

  // Use react-i18next for translation 
  const { t, i18n } = useTranslation(); //'t' for translation & 'i18n' for change directions
  useEffect(()=> {
    const updateDirection = (lng)=> {
      const rtlLanguage = ['ar'];
      document.documentElement.dir = rtlLanguage.includes(lng) ? 'rtl' : 'ltr';
    };
    // Initial direction setup
    updateDirection(i18n.language); 
    // Listen for language changes
    i18n.on('languageChanged', updateDirection); 
    // Cleanup listener
    return ()=> { 
      i18n.off('languageChanged', updateDirection)
    }
  }, [i18n])

  return (
    <>
      <Container className="hero-section" data-aos="fade-up" data-aos-duration="2000">
        <Row>
          <Col  xs={12} sm={12} md={7} lg={7}  
            className="d-flex justify-content-center align-items-start flex-column">
            <p className="grade-title fs-3">{t('heroSmallTitle')}</p>
            <h1 className={i18n.language === 'en' ? 'text-start text-uppercase' : undefined}>
              <Trans i18nKey='heroTitle' components={{ br: <br /> }} />
            </h1>
          <p className="lead mt-4">{t('heroparagraph')}</p>  
          </Col>

          <Col  xs={12} sm={12} md={5} lg={5}
                className="d-flex justify-content-center align-items-center">
            <Image
              src="./heroImg2.png" 
              className="hero-img"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HeroSection;

//earth img [https://www.pinterest.com/pin/70931762876102460/]
