import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function CardList({ data }) {
  return (
    <Card className="mb-3 shadow">
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Order</Button>
      </Card.Body>
    </Card>
  );
}
