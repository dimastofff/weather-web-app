import React, { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Location from "./components/location/Location";
import CurrentWeather from "./components/weather/current-weather/CurrentWeather";
import HourlyWeather from "./components/weather/hourly-weather/HourlyWeather";
import DailyWeather from "./components/weather/daily-weather/DailyWeather";
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
    </>
  );
};

export default App;
