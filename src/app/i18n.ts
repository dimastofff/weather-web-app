import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en_US: {
    translation: {
      shortLanguageCode: "en",
      fullLanguageName: "English",
      english: "English",
      russian: "Russian",
      welcoming: "Weather",
      currentWeather: "Current weather",
      hourlyWeather: "Forecast for 48 hours",
      dailyWeather: "Forecast for 8 days",
      clickOnMap:
        "Mark the place on the map for which you want to know the weather forecast",
      selectedCoordinates: "Selected coordinates",
      latitude: "Latitude: {{value}}°",
      longitude: "Longitude: {{value}}°",
      confirm: "Confirm",
      feelsLike: "Feels like: {{value}}°",
      humidity: "Humidity: {{value}}%",
      pressure: "Atmospheric pressure: {{value}} hPa",
    },
  },
  ru_RU: {
    translation: {
      shortLanguageCode: "ru",
      fullLanguageName: "Русский",
      english: "Английский",
      russian: "Русский",
      welcoming: "Погода",
      currentWeather: "Текущая погода",
      hourlyWeather: "Прогноз на 48 часов",
      dailyWeather: "Прогноз на 8 дней",
      clickOnMap:
        "Отметьте на карте место, для которого вы хотите узнать прогноз погоды",
      selectedCoordinates: "Выбранные координаты",
      latitude: "Широта: {{value}}°",
      longitude: "Долгота: {{value}}°",
      confirm: "Подтвердить",
      feelsLike: "Ощущается как: {{value}}°",
      humidity: "Влажность: {{value}}%",
      pressure: "Атмосферное давление: {{value}} гПа",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
