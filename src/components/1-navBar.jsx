import React, {useState} from "react";
import { Navbar, Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

function NavBar() {
  const { i18n } = useTranslation();
  const [isArabic, setIsArabic] = useState(i18n.language === 'ar');

  const handleLanguageToggle = () => {
    const newLang = isArabic ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    setIsArabic(!isArabic);
  };


  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className="bg-body-transparent"
      >
        <Container fluid className="mx-5">
          <Navbar.Brand href="#">
            <img
              src="./logo.png"
              className="logo d-inline-block align-top"
              alt="logo"
            />
            {/* <p className="lead fw-bold">WEB TOOLS</p> */}
          </Navbar.Brand>
          {/* Switch-button for languages */}
          <Form>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="Arabic"
              checked={isArabic}
              onChange={handleLanguageToggle}
            />
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
