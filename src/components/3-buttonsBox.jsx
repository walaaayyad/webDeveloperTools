import React, {useEffect} from "react";
import {Container, Row, Col, Button } from "react-bootstrap";
import { useButtonContext } from "../ButtonContext"; // Import the custom hook to access the context
import AOS from 'aos';
import { useTranslation } from 'react-i18next';

function ButtonsBox({ onClick }) {
  useEffect(() => {
    AOS.refresh(); // Recalculate AOS positions if dynamic content is used
  }, []);

  const { selectedCategory, setSelectedCategory } = useButtonContext(); // Get shared state
  const { t } = useTranslation(); // For translation
  const btnKeys = ['inspire','design','assets','cssTools','optimization','production'];
  return (
    <>
      <Container className="padding" data-aos="fade-up" data-aos-duration="2000">
        <Row className="mt-5">
          <Col className="col-12 my-3 d-flex">
            <div className="btns-box text-center">
              {btnKeys.map((key) => (
              <Button
                key={key}
                variant="outline-primary"
                className={selectedCategory === key ? 'active' : ''}
                onClick={() => {
                  onClick?.(); // optional chaining in case it's undefined
                  setSelectedCategory(key);
                }}
              >
                {t(`buttons.${key}`)}
              </Button>
            ))}
            </div>
          </Col>
        </Row>  
      </Container>
    </>
  );
}

export default ButtonsBox;
