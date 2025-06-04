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
        className="bg-body-transparent border-bottom border-dark"
      >
        <Container className="ms-5 pt-2">
          <Navbar.Brand href="#">
            {/* <img
              src="./logoImages/logo.png"
              width="200"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> */}
            <p className="lead fw-bold">WEB TOOLS</p>
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
