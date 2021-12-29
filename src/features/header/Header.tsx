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

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h1 className={styles.brand}>{t("welcoming")}</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/currentWeather">
                {t("currentWeather")}
              </Nav.Link>
              <Nav.Link as={Link} to="/hourlyWeather">
                {t("hourlyWeather")}
              </Nav.Link>
              <Nav.Link as={Link} to="/dailyWeather">
                {t("dailyWeather")}
              </Nav.Link>
              <Nav.Link as={Link} to="/location">
                <img
                  className={styles.locationImg}
                  src="images/geo-alt.svg"
                  alt="geo"
                />
                {location
                  ?.map((coord: number) => `${coord.toFixed(6)}°`)
                  .join(", ")}
              </Nav.Link>
              <NavDropdown
                title={t("fullLanguageName")}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item onClick={() => i18n.changeLanguage("en_US")}>
                  {t("english")}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => i18n.changeLanguage("ru_RU")}>
                  {t("russian")}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
