import { useState } from "react";
import { useButtonContext } from "../ButtonContext"; // Import the custom hook to access the context
import data from "../data.json";
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Image, Col } from "react-bootstrap";

function ToolsBox({ dataSectionRef }) {
  const { selectedCategory } = useButtonContext(); // Access shared state
  const [index, setIndex] = useState(0); // State to manage the carousel index

  // Handle carousel item select
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Filter data based on the selected category
  const filteredData = data.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <Container className="text-dark pb-5" ref={dataSectionRef}>
      <Row className="justify-content-center">
        {/* Display message if no data is available */}
        {filteredData.length === 0 ? (
          <Col className="text-center mt-5">
            <h2>Welcome, Creative Mind! 🌟</h2>
            <p className="lead fs-4">
              Let's get started! <br /> Choose a category from the buttons to
              explore some amazing resources.
            </p>
          </Col>
        ) : (
        
          filteredData.map((item) => (
            <Col xs={12} sm={6} md={4} lg={4} 
                 className="text-center mt-5">
              <Card className="custom-card shadow-sm mb-4" key={item.id}>
                <div className="card-img-container">
                  <Card.Img className="logoImg" src={item.webLogo} alt={`${item.title} Logo`} />
                </div>
                <Card.Body>
                  <Card.Title className="card-title pb-3 mb-3">{item.title}</Card.Title>
                  <Card.Text className="text-muted">{item.desc}</Card.Text>
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
