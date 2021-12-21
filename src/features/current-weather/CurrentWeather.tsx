import React, { FunctionComponent } from "react";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectCurrentWeather } from "./currentWeatherSlice";

const CurrentWeather: FunctionComponent = () => {
  const [t, i18n] = useTranslation();

  const weather = useAppSelector(selectCurrentWeather);

  const content = (
    <section>
      <h2>{t("currentWeather")}</h2>
    </section>
  );

  return weather ? content : <Navigate to="/location" />;
};

export default CurrentWeather;
