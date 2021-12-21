import React, { FunctionComponent } from "react";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DailyWeather: FunctionComponent = () => {
  const [t, i18n] = useTranslation();

  const weather = null;

  const content = (
    <section>
      <h2>{t("dailyWeather")}</h2>
    </section>
  );

  return weather ? content : <Navigate to="/location" />;
};

export default DailyWeather;
