import { useState } from "react";
import { useButtonContext } from "../ButtonContext"; // Import the custom hook to access the context
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Image, Col } from "react-bootstrap";

function ToolsBox() {
  const { selectedCategory } = useButtonContext(); // Access shared state
  const [index, setIndex] = useState(0); // State to manage the carousel index

  const data = [
    {
      id: 1,
      category: "inspire",
      title: "pinterest",
      webImg: "./websiteImages/pinterest.png",
      webLogo: "./logoImages/websiteIcon/pinterest_logo.png",
      desc: "Discover recipes, home ideas, style inspiration and other ideas to try.",
    },
    {
      id: 2,
      category: "inspire",
      title: "pinterest2",
      webImg: "./websiteImages/pinterest.png",
      webLogo: "./logoImages/websiteIcon/pinterest_logo.png",
      desc: "Discover recipes, home ideas, style inspiration and other ideas to try.",
    },
    {
      id: 3,
      category: "icon",
      title: "pinterest--icon",
      webImg: "./websiteImages/pinterest.png",
      webLogo: "./logoImages/websiteIcon/pinterest_logo.png",
      desc: "Discover recipes, home ideas, style inspiration and other ideas to try.",
    },
    {
      id: 4,
      category: "icon",
      title: "pinterest--icon2",
      webImg: "./websiteImages/pinterest.png",
      webLogo: "./logoImages/websiteIcon/pinterest_logo.png",
      desc: "Discover recipes, home ideas, style inspiration and other ideas to try.",
    },
  ];

  // Handle carousel item select
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Filter data based on the selected category
  const filteredData = data.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <Container fluid className="text-dark">
      <Row>
        {/* Display message if no data is available */}
        {filteredData.length === 0 ? (
          <Col className="text-center">
            <h2>Welcome, Creative Mind! 🌟</h2>
            <p className="lead fs-4">
              Let's get started! <br /> Choose a category from the buttons to
              explore some amazing resources.
            </p>
          </Col>
        ) : (
          // Display carousel when data is available
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            data-bs-theme="dark"
            interval={null}
          >
            {filteredData.map((item) => (
              <Carousel.Item key={item.id}>
                <Row className="justify-content-md-center p-5">
                  <Col className="col-5">
                    <Image src={item.webImg} className="website-img" />
                  </Col>
                  <Col className="col-5">
                    <Carousel.Caption>
                      <Image src={item.webLogo} width={50} />
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </Carousel.Caption>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </Row>
    </Container>
  );
}

export default ToolsBox;
