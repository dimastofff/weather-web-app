import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  YMaps,
  Map,
  SearchControl,
  GeolocationControl,
  ZoomControl,
  FullscreenControl,
  Button,
  Placemark,
} from "react-yandex-maps";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { updateLocation, selectLocation } from "./locationSlice";
import { resetCurrentWeather } from "../weather/current-weather/currentWeatherSlice";
import { resetDailyWeather } from "../weather/daily-weather/dailyWeatherSlice";
import { resetHourlyWeather } from "../weather/hourly-weather/hourlyWeatherSlice";

const API_KEY = process.env.REACT_APP_YANDEX_MAPS_API_KEY;

const Location: FunctionComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const location: any = useAppSelector(selectLocation);
  const language: any = t("yandexLanguage");

  return (
    <section>
      <Card.Title className="text-center">{t("clickOnMap")}</Card.Title>
      <YMaps key={language} query={{ lang: language, apikey: API_KEY }}>
        <Map
          height="82vh"
          width="100%"
          defaultState={{
            center: location || [53.9, 27.56667],
            zoom: 9,
            controls: [],
          }}
          onClick={(e: any) => dispatch(updateLocation(e.get("coords")))}
        >
          <ZoomControl options={{ float: "left" }} />
          <FullscreenControl options={{ float: "left" }} />
          <GeolocationControl
            defaultOptions={{ float: "right", width: "50px" }}
            onLocationChange={(e: any) =>
              dispatch(updateLocation(e.get("position")))
            }
          />
          <SearchControl
            options={{ float: "right", noPlacemark: true }}
            onResultSelect={(e: any) => {
              const results = e.originalEvent.target.state._data.results;
              const index = e.originalEvent.index;
              const selected = results[index].geometry.getCoordinates();
              dispatch(updateLocation(selected));
            }}
          />
          {location ? (
            <Button
              data={{ content: t("confirm") }}
              options={{ float: "right" }}
              onClick={() => {
                dispatch(resetCurrentWeather());
                dispatch(resetDailyWeather());
                dispatch(resetHourlyWeather());
                navigate(-1);
              }}
            />
          ) : null}
          <Placemark geometry={location} />
        </Map>
      </YMaps>
    </section>
  );
};

export default Location;
