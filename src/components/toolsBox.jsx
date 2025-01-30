import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Image, Col } from "react-bootstrap";

function ToolsBox() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const data = [
    {
      id: 1,
      category: "inspire",
      title: "pinterest",
      webImg: "src/images/pinterest.png",
      webLogo: "./images/logoIcons/pinterest_logo.png",
      desc: "Discover recipes, home ideas, style inspiration and other ideas to try.",
    },
    {
      id: 2,
      category: "inspire",
      title: "pinterest2",
      webImg: "src/images/pinterest.png",
      webLogo: "./images/logoIcons/pinterest_logo.png",
      desc: "Discover recipes, home ideas, style inspiration and other ideas to try.",
    },
    {
      id: 3,
      category: "inspire",
      title: "pinterest3",
      webImg: "src/images/pinterest.png",
      webLogo: "./images/logoIcons/pinterest_logo.png",
      desc: "Discover recipes, home ideas, style inspiration and other ideas to try.",
    },
    {
      id: 4,
      category: "inspire",
      title: "pinterest4",
      webImg: "src/images/pinterest.png",
      webLogo: "./images/logoIcons/pinterest_logo.png",
      desc: "Discover recipes, home ideas, style inspiration and other ideas to try.",
    },
  ];

  return (
    <>
      <Container fluid className="text-dark">
        <Row>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            data-bs-theme="dark"
            interval={null}
          >
            {data.map((i) => {
              return (
                <Carousel.Item
                  key={i.id}
                  className="text-center border border-danger"
                >
                  <Row className="justify-content-md-center p-5">
                    <Col className="col-5 border border-info m-2 p-2">
                      <Image src={i.webImg} className="website-img" />
                    </Col>
                    <Col className="col-5 border border-secondary m-2 p-2">
                      <Carousel.Caption>
                        <Image src={i.webLogo} width={50} />
                        <h3>{i.title}</h3>
                        <p>{i.desc}</p>
                      </Carousel.Caption>
                    </Col>
                  </Row>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Row>
      </Container>
    </>
  );
}

export default ToolsBox;
