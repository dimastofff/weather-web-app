import React, { FunctionComponent } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Weather, Alert } from "../../../app/types";

interface WeatherCardProps {
  weather: Weather;
  alerts: Alert[];
  language: string;
}

const WeatherCard: FunctionComponent<WeatherCardProps> = ({
  weather,
  alerts,
  language,
}) => {
  return (
    <Card className="text-center" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`/images/weather/${weather?.weather[0].icon}.png`}
      />
      <Card.Body>
        <Card.Title className="fs-1">{weather.temp}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {new Date(weather.dt * 1000).toLocaleString(language)}
        </Card.Subtitle>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{weather.feels_like}</ListGroup.Item>
        <ListGroup.Item>{weather.humidity}</ListGroup.Item>
        <ListGroup.Item>{weather.pressure}</ListGroup.Item>
        <ListGroup.Item>{weather.wind_deg}</ListGroup.Item>
        <ListGroup.Item>{weather.wind_speed}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default WeatherCard;
