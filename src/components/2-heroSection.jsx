import React, {useEffect} from "react";
import {Container, Row, Col, Image } from "react-bootstrap";
import AOS from 'aos';

function HeroSection() {
  useEffect(() => {
    AOS.refresh(); // Recalculate AOS positions if dynamic content is used
  }, []);
  return (
    <>
      <Container className="hero-section" data-aos="fade-up" data-aos-duration="2000">
        <Row>
          <Col  xs={12} sm={12} md={7} lg={7}  
            className="d-flex justify-content-center align-items-start flex-column">
            <p className="grade-title fs-3">
                Essential Free Tools for Web Developers</p>
            {/* <p>أفضل الأدوات المجانية لمطوري الويب</p> */}
            <h1 className="text-start text-uppercase" >
            {/* <span className="grade-title me-3">Free tools</span>for<br/>Web Developers */}
            Design Better. Develop Faster. <br /> Show Your Work Like a Pro.
            {/* صمّم باحتراف. طوّر بسرعة. <br/>اعرض عملك كالمحترفين. */}
            </h1>
          <p 
            className="lead pe-5 mt-4">
              Unlock a curated set of free tools built for modern web developers and designers. From layout optimization and mobile simulation to screenshot sharing and UI previews. These tools help you speed up your workflow, improve your designs, and present your work professionally to clients.</p>
          {/* <p>اكتشف مجموعة مختارة من الأدوات المجانية المصممة لمطوري ومصممي الويب العصريين. من تحسين التنسيق ومحاكاة الأجهزة إلى مشاركة لقطات الشاشة ومعاينات واجهات المستخدم — هذه الأدوات تساعدك على تسريع سير العمل، تحسين التصميمات، وتقديم عملك باحترافية للعملاء.</p> */}
          
          </Col>

          <Col  xs={12} sm={12} md={5} lg={5}
                className="d-flex justify-content-center align-items-center">
            <Image
              src="./heroImg2.png" //https://www.freepik.com/free-vector/colorful-gradient-gamification-illustrated_21742931.htm#fromView=search&page=1&position=45&uuid=ee54b3db-3bbd-4a2a-bd9a-d2b299c4a1de&query=3d+web+
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
