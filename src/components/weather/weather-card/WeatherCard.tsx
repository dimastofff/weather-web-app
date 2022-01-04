import React, { FunctionComponent } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Weather, Alert } from "../../../app/types";

interface WeatherCardProps {
  weather: Weather;
  alerts: Alert[];
}

const WeatherCard: FunctionComponent<WeatherCardProps> = ({
  weather,
  alerts,
}) => {
  const { t } = useTranslation();

  const date = new Date(weather.dt * 1000).toLocaleString(
    t("shortLanguageCode")
  );

  const temperature =
    typeof weather.temp === "number" ? `${Math.round(weather.temp)}°` : null;
  const feelsLike =
    typeof weather.feels_like === "number"
      ? t("feelsLike", { value: Math.round(weather.feels_like) })
      : null;
  const humidity = t("humidity", { value: weather.humidity });
  const pressure = t("pressure", { value: weather.pressure });

  return (
    <Card>
      <Card.Img
        className="w-50 mx-auto"
        variant="top"
        src={`/images/weather/${weather.weather[0].icon}.png`}
      />
      <Card.Body>
        <Card.Title className="fs-1">{temperature}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{feelsLike}</ListGroup.Item>
        <ListGroup.Item>{humidity}</ListGroup.Item>
        <ListGroup.Item>{pressure}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default WeatherCard;
