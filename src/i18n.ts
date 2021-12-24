import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en_US: {
    translation: {
      langCodeForWeatherApi: "en",
      welcoming: "Weather from OpenWeatherMapAPI",
      currentWeather: "Current weather",
      hourlyWeather: "Hourly weather",
      dailyWeather: "Daily weather",
      clickOnMap:
        "Mark the place on the map for which you want to know the weather forecast",
      selectedCoordinates: "Selected coordinates",
      latitude: "Latitude",
      longitude: "Longitude",
      confirm: "Confirm",
    },
  },
  ru_RU: {
    translation: {
      langCodeForWeatherApi: "ru",
      welcoming: "Погода из OpenWeatherMapAPI",
      currentWeather: "Текущая погода",
      hourlyWeather: "Прогноз погоды по часам",
      dailyWeather: "Прогноз погоды по дням",
      clickOnMap:
        "Отметьте на карте место, для которого вы хотите узнать прогноз погоды",
      selectedCoordinates: "Выбранные координаты",
      latitude: "Широта",
      longitude: "Долгота",
      confirm: "Подтвердить",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en_US",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
