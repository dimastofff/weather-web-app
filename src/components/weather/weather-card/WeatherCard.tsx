import React, { FunctionComponent } from "react";
import { Card, ListGroup, Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Weather } from "../../../app/types";

interface WeatherCardProps {
  weather: Weather;
  type: "current" | "hourly" | "daily";
}

const WeatherCard: FunctionComponent<WeatherCardProps> = ({
  weather,
  type,
}) => {
  const { t } = useTranslation();

  const date =
    type === "daily"
      ? new Date(weather.dt * 1000).toLocaleDateString(t("shortLanguageCode"))
      : new Date(weather.dt * 1000).toLocaleString(t("shortLanguageCode"));
  const feelsLike =
    typeof weather.feels_like === "number"
      ? t("feelsLike", { value: Math.round(weather.feels_like) })
      : t("feelsLike", { value: Math.round(weather.feels_like.day) });
  const humidity = t("humidity", { value: weather.humidity });
  const pressure = t("pressure", { value: weather.pressure });

  const temperatureView =
    typeof weather.temp === "number" ? (
      <Card.Body>
        <Card.Title className="fs-1">{`${Math.round(
          weather.temp
        )}°`}</Card.Title>
      </Card.Body>
    ) : (
      <Card.Body className="d-flex flex-row justify-content-evenly">
        <Card.Title className="fs-1">{`${Math.round(
          weather.temp.day
        )}°`}</Card.Title>
        <Card.Title className="fs-1 text-muted">{`${Math.round(
          weather.temp.night
        )}°`}</Card.Title>
      </Card.Body>
    );

  return (
    <Card className="m-1" style={{ width: "240px" }}>
      <Card.Header>{date}</Card.Header>
      <Card.Img
        className="w-50 mx-auto"
        variant="top"
        src={`/images/weather/${weather.weather[0].icon}.png`}
      />
      {temperatureView}
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{t("moreDetails")}</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{feelsLike}</ListGroup.Item>
              <ListGroup.Item>{humidity}</ListGroup.Item>
              <ListGroup.Item>{pressure}</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Card>
  );
};

export default WeatherCard;
