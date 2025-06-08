import React, {useEffect} from "react";
import { titleDesc } from "../toolsHeadTitleContent";
import { useButtonContext } from "../ButtonContext"; // Import the custom hook to access the context
import data from "../data.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap";
import AOS from 'aos';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next'; // To use <br/> inside text

function ToolsBox({ targetRef }) {
  useEffect(() => {
    AOS.refresh(); // Recalculate AOS positions if dynamic content is used
  }, []);

  const { selectedCategory } = useButtonContext(); // Access shared state
  // Switch between English & Arabic
  const { t } = useTranslation(); 
  // Change language for imported data
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // Get the description for the selected category
  const currentTitleDesc = titleDesc.find(
    (item) => item.cate === selectedCategory
  );

  // Filter data based on the selected category
  const filteredData = data.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <Container className="text-dark pb-5" data-aos="fade-up" data-aos-duration="2000">
      <div id="target" className="" ref={targetRef}></div>
      <Row className="justify-content-center">
        {/* Show title/description if category is selected */}
        {currentTitleDesc && (
          <Col xs={12} 
          className="text-center">
            <h2>{currentLang === 'ar' ? currentTitleDesc.arTitle : currentTitleDesc.title}</h2>
            <p className="lead fs-4 section-title">{currentLang === 'ar' ? currentTitleDesc.arDesc : currentTitleDesc.desc}</p>
          </Col>
        )}

        {/* Display message if no data is available */}
        {filteredData.length === 0 ? (
          <Col 
            className="text-center" 
            >
            <h2>{t('toolBoxInitTitle')}</h2>
            <p className="lead fs-4">
              <Trans i18nKey='toolBoxParagraph' components={{ br: <br /> }} />
            </p>
          </Col>
        ) : (
          filteredData.map((item) => (
            <Col xs={12} sm={6} md={4} lg={4} className="text-center mt-5" key={item.id}>
              <Card className="custom-card shadow-sm mb-4" data-aos="zoom-in-up">
                <div className="card-img-container">
                  <Card.Img className="logoImg" src={item.webLogo} alt={`${item.title} Logo`} />
                </div>
                <Card.Body>
                  <Card.Title className="card-title pb-3 mb-3">{item.title}</Card.Title>
                  <Card.Text className="text-muted">{currentLang === 'ar' ? item.arDesc : item.desc}</Card.Text>
                  <Button
                    variant="outline-primary"
                    href={item.link}
                    target="_blank"
                    className="visit-btn"
                  >
                    Visit &rarr;
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default ToolsBox;
