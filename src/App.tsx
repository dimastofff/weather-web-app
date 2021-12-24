import React, { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./features/header/Header";
import Location from "./features/location/Location";
import CurrentWeather from "./features/current-weather/CurrentWeather";
import HourlyWeather from "./features/hourly-weather/HourlyWeather";
import DailyWeather from "./features/daily-weather/DailyWeather";
import "./App.css";

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<CurrentWeather />} />
          <Route path="/currentWeather" element={<CurrentWeather />} />
          <Route path="/hourlyWeather" element={<HourlyWeather />} />
          <Route path="/dailyWeather" element={<DailyWeather />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
