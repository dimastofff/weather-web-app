import React, { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectCurrentWeather, getCurrentWeather } from "./currentWeatherSlice";
import { selectLocation } from "../../location/locationSlice";
import WeatherCard from "../weather-card/WeatherCard";

const CurrentWeather: FunctionComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const weather = useAppSelector(selectCurrentWeather);
  const location = useAppSelector(selectLocation);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!location) {
      navigate("/location");
    } else if (!weather) {
      const [latitude, longitude] = location;
      const language = t("shortLanguageCode");
      dispatch(getCurrentWeather({ latitude, longitude, language }));
    }
  }, []);

  return (
    <Container className="text-center" style={{ maxWidth: "240px" }}>
      <h2>{t("currentWeather")}</h2>
      {weather ? (
        <WeatherCard weather={weather.current} alerts={weather.alerts} />
      ) : null}
    </Container>
  );
};

export default CurrentWeather;
