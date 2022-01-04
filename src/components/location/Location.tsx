import React, { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  YMaps,
  Map,
  SearchControl,
  GeolocationControl,
  ZoomControl,
  FullscreenControl,
  Placemark,
} from "react-yandex-maps";
import { useAppDispatch } from "../../app/hooks";
import { updateLocation } from "./locationSlice";

const API_KEY = process.env.REACT_APP_YANDEX_MAPS_API_KEY;
const DEFAULT_MAP_STATE = {
  center: [53.9, 27.56667],
  zoom: 9,
  controls: [],
};

const Location: FunctionComponent = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { language }: any = i18n;

  const [coords, setCoords] = useState<any>(null);

  const dispatch = useAppDispatch();

  const coordsView = coords ? (
    <section>
      <h2>{t("selectedCoordinates")}</h2>
      <h3>{`${t("latitude")}: ${coords[0].toFixed(6)}`}</h3>
      <h3>{`${t("longitude")}: ${coords[1].toFixed(6)}`}</h3>
      <Button
        variant="success"
        onClick={() => {
          dispatch(updateLocation(coords));
          navigate("/currentWeather");
        }}
      >
        {t("confirm")}
      </Button>
    </section>
  ) : (
    <h2 className="fs-6 text-center">{t("clickOnMap")}</h2>
  );

  return (
    <section>
      {coordsView}
      <YMaps key={language} query={{ lang: language, apikey: API_KEY }}>
        <Map
          height="320px"
          width="100%"
          defaultState={DEFAULT_MAP_STATE}
          onClick={(e: any) => setCoords(e.get("coords"))}
        >
          <ZoomControl options={{ float: "left" }} />
          <FullscreenControl options={{ float: "left" }} />
          <GeolocationControl
            options={{ float: "right" }}
            onLocationChange={(e: any) => setCoords(e.get("position"))}
          />
          <SearchControl
            options={{ float: "right", noPlacemark: true }}
            onResultSelect={(e: any) => {
              const results = e.originalEvent.target.state._data.results;
              const index = e.originalEvent.index;
              const selected = results[index].geometry.getCoordinates();
              setCoords(selected);
            }}
          />
          <Placemark geometry={coords} />
        </Map>
      </YMaps>
    </section>
  );
};

export default Location;
