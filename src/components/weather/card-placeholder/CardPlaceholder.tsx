import React, { FunctionComponent } from "react";
import { Card, Placeholder } from "react-bootstrap";

const CardPlaceholder: FunctionComponent = () => {
  return (
    <Card style={{ width: "240px", height: "300px" }}>
      <Placeholder as={Card.Header} animation="glow">
        <Placeholder className="w-75" />
      </Placeholder>
      <Card.Body className="d-flex flex-column">
        <Placeholder animation="glow">
          <Placeholder style={{ height: "80px", width: "80px" }} />
        </Placeholder>
        <Placeholder className="my-3" animation="glow">
          <Placeholder style={{ height: "40px", width: "40px" }} />
        </Placeholder>
        <Placeholder animation="glow">
          <Placeholder className="w-50" /> <Placeholder className="w-25" />
          <Placeholder className="w-50" /> <Placeholder className="w-25" />
          <Placeholder className="w-50" /> <Placeholder className="w-25" />
        </Placeholder>
      </Card.Body>
    </Card>
  );
};

export default CardPlaceholder;
