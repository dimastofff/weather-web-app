import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      yandexLanguage: "en_US",
      fullLanguageName: "English",
      english: "English",
      deutsch: "Deutsch",
      russian: "Russian",
      welcoming: "Weather",
      currentWeather: "Current weather",
      hourlyWeather: "Forecast for 48 hours",
      dailyWeather: "Forecast for the week",
      refresh: "Refresh",
      clickOnMap: "Mark the place on the map",
      latitude: "Latitude: {{value}}°",
      longitude: "Longitude: {{value}}°",
      confirm: "Confirm",
      moreDetails: "More details",
      feelsLike: "Feels like: {{value}}°",
      humidity: "Humidity: {{value}}%",
      pressure: "Atmospheric pressure: {{value}} hPa",
      fetchingError: "Data fetching error",
    },
  },
  de: {
    translation: {
      yandexLanguage: "en_US",
      fullLanguageName: "Deutsch",
      english: "Englisch",
      deutsch: "Deutsch",
      russian: "Russisch",
      welcoming: "Wetter",
      currentWeather: "Aktuelles Wetter",
      hourlyWeather: "Vorhersage für 48 Stunden",
      dailyWeather: "Prognose für die Woche",
      refresh: "Aktualisierung",
      clickOnMap: "Markieren Sie den Standort auf der Karte",
      latitude: "Breite: {{value}}°",
      longitude: "Längengrad: {{value}}°",
      confirm: "Confirm",
      moreDetails: "Mehr Details",
      feelsLike: "Fühlt sich an wie: {{value}}°",
      humidity: "Feuchtigkeit: {{value}}%",
      pressure: "Atmosphärendruck: {{value}} hPa",
      fetchingError: "Fehler beim Abrufen von Daten",
    },
  },
  ru: {
    translation: {
      yandexLanguage: "ru_RU",
      fullLanguageName: "Русский",
      english: "Английский",
      deutsch: "Немецкий",
      russian: "Русский",
      welcoming: "Погода",
      currentWeather: "Текущая погода",
      hourlyWeather: "Прогноз на 48 часов",
      dailyWeather: "Прогноз на неделю",
      refresh: "Обновить",
      clickOnMap: "Отметьте место на карте",
      latitude: "Широта: {{value}}°",
      longitude: "Долгота: {{value}}°",
      confirm: "Подтвердить",
      moreDetails: "Подробнее",
      feelsLike: "Ощущается как: {{value}}°",
      humidity: "Влажность: {{value}}%",
      pressure: "Атмосферное давление: {{value}} гПа",
      fetchingError: "Ошибка при получении данных",
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
