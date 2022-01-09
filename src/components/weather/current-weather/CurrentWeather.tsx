import React, { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectCurrentWeather,
  selectLoadingStatus,
  getCurrentWeather,
} from "./currentWeatherSlice";
import { selectLocation } from "../../location/locationSlice";
import WeatherCard from "../weather-card/WeatherCard";
import WeatherPlaceholder from "../weather-placeholder/WeatherPlaceholder";
import styles from "./CurrentWeather.module.css";

const CurrentWeather: FunctionComponent = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const status = useAppSelector(selectLoadingStatus);
  const weather = useAppSelector(selectCurrentWeather);
  const location = useAppSelector(selectLocation);
  const { language } = i18n;

  useEffect(() => {
    if (!location) {
      navigate("/location");
    } else if (!weather) {
      const [latitude, longitude] = location;
      dispatch(getCurrentWeather({ latitude, longitude, language }));
    }
  }, []);

  return (
    <>
      <h2 className="text-center my-3">
        {t("currentWeather")}
        {"   "}
        <img
          className={
            status === "loading" ? styles.refreshRotate : styles.refresh
          }
          src="/images/refresh.png"
          alt={t("refresh")}
          onClick={() => {
            if (location) {
              const [latitude, longitude] = location;
              dispatch(getCurrentWeather({ latitude, longitude, language }));
            }
          }}
        />
      </h2>
      <Container fluid className="d-flex justify-content-center text-center">
        {status === "loading" ? (
          <WeatherPlaceholder />
        ) : status === "failed" ? (
          <Alert variant="danger">{t("fetchingError")}</Alert>
        ) : weather ? (
          <WeatherCard type="current" weather={weather.current} />
        ) : null}
      </Container>
    </>
  );
};

export default CurrentWeather;
