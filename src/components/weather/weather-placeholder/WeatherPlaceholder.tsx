import React, { FunctionComponent } from "react";
import { Card, Placeholder } from "react-bootstrap";
import styles from "./WeatherPlaceholder.module.css";

const WeatherPlaceholder: FunctionComponent = () => {
  return (
    <Card className={styles.card}>
      <Placeholder as={Card.Header} animation="glow">
        <Placeholder className="w-75" />
      </Placeholder>
      <Card.Body className="d-flex flex-column">
        <Placeholder animation="glow">
          <Placeholder className={styles.image} />
        </Placeholder>
        <Placeholder className="my-2" animation="glow">
          <Placeholder className={styles.temperature} />
        </Placeholder>
        <Placeholder animation="glow">
          <Placeholder className="w-50" /> <Placeholder className="w-25" />
          <Placeholder className="w-50" /> <Placeholder className="w-25" />
        </Placeholder>
      </Card.Body>
    </Card>
  );
};

export default WeatherPlaceholder;
