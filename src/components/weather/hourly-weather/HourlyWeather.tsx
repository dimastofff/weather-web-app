import React, { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectHourlyWeather, getHourlyWeather } from "./hourlyWeatherSlice";
import { selectLocation } from "../../location/locationSlice";
import WeatherCard from "../weather-card/WeatherCard";
import { Weather } from "../../../app/types";
import WeatherPlaceholder from "../weather-placeholder/WeatherPlaceholder";

const HourlyWeather: FunctionComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const weather = useAppSelector(selectHourlyWeather);
  const location = useAppSelector(selectLocation);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!location) {
      navigate("/location");
    } else if (!weather) {
      const [latitude, longitude] = location;
      const language = t("shortLanguageCode");
      dispatch(getHourlyWeather({ latitude, longitude, language }));
    }
  });

  return (
    <>
      <h2 className="text-center my-3">{t("hourlyWeather")}</h2>
      <Container
        fluid
        className="d-flex flex-wrap justify-content-center align-items-center text-center"
      >
        {weather
          ? weather.hourly.map((hour: Weather) => (
              <WeatherCard key={hour.dt} type="hourly" weather={hour} />
            ))
          : Array.from(Array(48).keys()).map((value: number) => (
              <WeatherPlaceholder key={value} />
            ))}
      </Container>
    </>
  );
};

export default HourlyWeather;
