import React, { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectDailyWeather, getDailyWeather } from "./dailyWeatherSlice";
import { selectLocation } from "../../location/locationSlice";
import WeatherCard from "../weather-card/WeatherCard";
import { Weather } from "../../../app/types";
import WeatherPlaceholder from "../weather-placeholder/WeatherPlaceholder";

const DailyWeather: FunctionComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const weather = useAppSelector(selectDailyWeather);
  const location = useAppSelector(selectLocation);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!location) {
      navigate("/location");
    } else if (!weather) {
      const [latitude, longitude] = location;
      const language = t("shortLanguageCode");
      dispatch(getDailyWeather({ latitude, longitude, language }));
    }
  });

  return (
    <>
      <h2 className="text-center my-3">{t("dailyWeather")}</h2>
      <Container
        fluid
        className="d-flex flex-wrap justify-content-center align-items-center text-center"
      >
        {weather
          ? weather.daily.map((day: Weather) => (
              <WeatherCard key={day.dt} type="daily" weather={day} />
            ))
          : Array.from(Array(8).keys()).map((value: number) => (
              <WeatherPlaceholder key={value} />
            ))}
      </Container>
    </>
  );
};

export default DailyWeather;
