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
    <>
      <h2 className="text-center my-3">{t("currentWeather")}</h2>
      <Container fluid className="d-flex justify-content-center text-center">
        {weather ? (
          <WeatherCard type="current" weather={weather.current} />
        ) : null}
      </Container>
    </>
  );
};

export default CurrentWeather;
