import React, {useState} from "react";
import { Navbar, Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

function NavBar() {
  const { i18n } = useTranslation();
  // const [isArabic, setIsArabic] = useState(i18n.language === 'ar');

  const isArabic = i18n.language === 'ar';

  const handleLanguageToggle = () => {
  const newLang = i18n.language === 'ar' ? 'en' : 'ar';
  i18n.changeLanguage(newLang);
};



  return (
    <>
     <Container fluid dir={isArabic ? 'ltr' : undefined}> {/* wrap the navbar with this condition to ignor the directions changing and keep the navbar ltr in both languages */}
        <Navbar
          expand="lg"
          fixed="top"
          className="bg-body-transparent"
        >
          <Container>
            <Navbar.Brand href="#">
              <img
                src="./logo.png"
                className="logo d-inline-block align-top"
                alt="logo"
              />
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
      </Container>
    </>
  );
}

export default NavBar;
