import React, { FunctionComponent } from "react";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HourlyWeather: FunctionComponent = () => {
  const [t, i18n] = useTranslation();

  const weather = null;

  const content = (
    <section>
      <h2>{t("currentWeather")}</h2>
    </section>
  );

  return weather ? content : <Navigate to="/location" />;
};

export default HourlyWeather;
