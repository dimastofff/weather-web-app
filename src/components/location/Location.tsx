import React, { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, ListGroup } from "react-bootstrap";
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

  const coordsView = (
    <Card className="w-100">
      <Card.Body className="text-center">
        {coords ? (
          <>
            <Card.Title>{t("selectedCoordinates")}</Card.Title>
            <Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  {t("latitude")}: {coords[0].toFixed(6)}
                </ListGroup.Item>
                <ListGroup.Item>
                  {t("longitude")}: {coords[1].toFixed(6)}
                </ListGroup.Item>
              </ListGroup>
            </Card.Text>
            <Button
              variant="success"
              onClick={() => {
                dispatch(updateLocation(coords));
                navigate("/currentWeather");
              }}
            >
              {t("confirm")}
            </Button>
          </>
        ) : (
          <Card.Title className="text-center">{t("clickOnMap")}</Card.Title>
        )}
      </Card.Body>
    </Card>
  );

  return (
    <section>
      {coordsView}
      <YMaps key={language} query={{ lang: language, apikey: API_KEY }}>
        <Map
          height="290px"
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
