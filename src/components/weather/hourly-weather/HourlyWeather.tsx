import React, { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectHourlyWeather,
  selectLoadingStatus,
  getHourlyWeather,
} from "./hourlyWeatherSlice";
import { selectLocation } from "../../location/locationSlice";
import WeatherCard from "../weather-card/WeatherCard";
import { Weather } from "../../../app/types";
import WeatherPlaceholder from "../weather-placeholder/WeatherPlaceholder";
import styles from "./HourlyWeather.module.css";

const HourlyWeather: FunctionComponent = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const status = useAppSelector(selectLoadingStatus);
  const weather = useAppSelector(selectHourlyWeather);
  const location = useAppSelector(selectLocation);
  const { language } = i18n;

  useEffect(() => {
    if (!location) {
      navigate("/location");
    } else if (!weather) {
      const [latitude, longitude] = location;
      dispatch(getHourlyWeather({ latitude, longitude, language }));
    }
  }, []);

  const placeholder = Array.from(Array(48).keys()).map((key: number) => (
    <WeatherPlaceholder key={key} />
  ));

  return (
    <>
      <h2 className="text-center my-3">
        {t("hourlyWeather")}
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
              dispatch(getHourlyWeather({ latitude, longitude, language }));
            }
          }}
        />
      </h2>
      <Container
        fluid
        className="d-flex flex-wrap justify-content-center align-items-center text-center"
      >
        {status === "loading" ? (
          placeholder
        ) : status === "failed" ? (
          <Alert variant="danger">{t("fetchingError")}</Alert>
        ) : weather ? (
          weather.hourly.map((hour: Weather, index: number) => (
            <WeatherCard key={index} type="hourly" weather={hour} />
          ))
        ) : null}
      </Container>
    </>
  );
};

export default HourlyWeather;
