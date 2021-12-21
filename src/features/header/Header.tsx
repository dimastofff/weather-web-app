import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Header: FunctionComponent = () => {
  const [t, i18n] = useTranslation();
  const [viewMode, setViewMode] = useState(t("currentWeather"));

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <h1>{t("welcoming")}</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title={viewMode} id="basic-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/currentWeather"
                  onClick={() => setViewMode(t("currentWeather"))}
                >
                  {t("currentWeather")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="hourlyWeather"
                  onClick={() => setViewMode(t("hourlyWeather"))}
                >
                  {t("hourlyWeather")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="dailyWeather"
                  onClick={() => setViewMode(t("dailyWeather"))}
                >
                  {t("dailyWeather")}
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
