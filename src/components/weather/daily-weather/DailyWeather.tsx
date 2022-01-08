import React, { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectDailyWeather,
  selectLoadingStatus,
  getDailyWeather,
} from "./dailyWeatherSlice";
import { selectLocation } from "../../location/locationSlice";
import WeatherCard from "../weather-card/WeatherCard";
import { Weather } from "../../../app/types";
import WeatherPlaceholder from "../weather-placeholder/WeatherPlaceholder";
import styles from "./DailyWeather.module.css";

const DailyWeather: FunctionComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const status = useAppSelector(selectLoadingStatus);
  const weather = useAppSelector(selectDailyWeather);
  const location = useAppSelector(selectLocation);
  const language = t("shortLanguageCode");

  useEffect(() => {
    if (!location) {
      navigate("/location");
    } else if (!weather) {
      const [latitude, longitude] = location;
      dispatch(getDailyWeather({ latitude, longitude, language }));
    }
  }, []);

  const placeholder = Array.from(Array(8).keys()).map((key: number) => (
    <WeatherPlaceholder key={key} />
  ));

  return (
    <>
      <h2 className="text-center my-3">
        {t("dailyWeather")}
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
              dispatch(getDailyWeather({ latitude, longitude, language }));
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
          weather.daily.map((day: Weather, index: number) => (
            <WeatherCard key={index} type="daily" weather={day} />
          ))
        ) : null}
      </Container>
    </>
  );
};

export default DailyWeather;
