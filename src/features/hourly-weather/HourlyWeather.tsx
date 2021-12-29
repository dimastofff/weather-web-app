import React, { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectHourlyWeather, getHourlyWeather } from "./hourlyWeatherSlice";
import { selectLocation } from "../location/locationSlice";

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

  console.log(weather);

  return (
    <section>
      <h2>{t("hourlyWeather")}</h2>
    </section>
  );
};

export default HourlyWeather;
