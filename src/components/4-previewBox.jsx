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
        <Carousel
          activeIndex={index} // Set the active slide to the `index` state
          onSelect={handleSelect} // Update index when carousel item is selected
          data-bs-theme="dark" // Apply dark theme to the carousel
          interval={null} // Disable auto-slide
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
      </Row>
    </Container>
  );
}

export default ToolsBox;
