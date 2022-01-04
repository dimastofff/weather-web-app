import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../app/hooks";
import { selectLocation } from "../location/locationSlice";

const Header: FunctionComponent = () => {
  const { t, i18n } = useTranslation();

  const location = useAppSelector(selectLocation);

  const languagesDropdown = (
    <NavDropdown id="collasible-nav-dropdown" title={t("fullLanguageName")}>
      <NavDropdown.Item
        eventKey="1"
        onClick={() => i18n.changeLanguage("en_US")}
      >
        {t("english")}
      </NavDropdown.Item>
      <NavDropdown.Item
        eventKey="2"
        onClick={() => i18n.changeLanguage("ru_RU")}
      >
        {t("russian")}
      </NavDropdown.Item>
    </NavDropdown>
  );

  const startLinksNav = (
    <Nav className="me-auto">
      <Nav.Link eventKey="3" as={Link} to="/currentWeather">
        {t("currentWeather")}
      </Nav.Link>
      <Nav.Link eventKey="4" as={Link} to="/hourlyWeather">
        {t("hourlyWeather")}
      </Nav.Link>
      <Nav.Link eventKey="5" as={Link} to="/dailyWeather">
        {t("dailyWeather")}
      </Nav.Link>
    </Nav>
  );

  const endLinksNav = (
    <Nav>
      <Nav.Link eventKey="6" as={Link} to="/location">
        <img
          style={{ height: "24px", width: "24px" }}
          src="images/geo-alt.svg"
          alt="geo"
        />
        {location
          ? t("headerCoords", {
              latitude: location[0].toFixed(6),
              longitude: location[1].toFixed(6),
            })
          : null}
      </Nav.Link>
      {languagesDropdown}
    </Nav>
  );

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h1>{t("welcoming")}</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {startLinksNav}
            {endLinksNav}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
