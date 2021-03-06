import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../app/hooks";
import { selectLocation } from "../location/locationSlice";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  const { t, i18n } = useTranslation();

  const location = useAppSelector(selectLocation);

  const languagesDropdown = (
    <NavDropdown id="collasible-nav-dropdown" title={t("fullLanguageName")}>
      <NavDropdown.Item eventKey="0" onClick={() => i18n.changeLanguage("en")}>
        {t("english")}
      </NavDropdown.Item>
      <NavDropdown.Item eventKey="1" onClick={() => i18n.changeLanguage("de")}>
        {t("deutsch")}
      </NavDropdown.Item>
      <NavDropdown.Item eventKey="2" onClick={() => i18n.changeLanguage("ru")}>
        {t("russian")}
      </NavDropdown.Item>
    </NavDropdown>
  );

  const startLinksNav = (
    <Nav className="me-auto">
      <Nav.Link eventKey="2" as={Link} to="/currentWeather">
        {t("currentWeather")}
      </Nav.Link>
      <Nav.Link eventKey="3" as={Link} to="/hourlyWeather">
        {t("hourlyWeather")}
      </Nav.Link>
      <Nav.Link eventKey="4" as={Link} to="/dailyWeather">
        {t("dailyWeather")}
      </Nav.Link>
    </Nav>
  );

  const endLinksNav = (
    <Nav>
      <Nav.Link eventKey="5" as={Link} to="/location">
        <img
          className={styles.locationImage}
          src="images/geo-alt.svg"
          alt="geo"
        />
        {location?.map((coord: number) => `${coord.toFixed(6)}°`).join(", ")}
      </Nav.Link>
      {languagesDropdown}
    </Nav>
  );

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            {t("welcoming")}
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
