import React from 'react';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import contentData from '../fakeData/contentData';

import CardList from './CardList';

export default function List() {
  return (
    <Container className="my-5">
      <Row>
        {contentData.map((data, index) => (
          <Col md={2} key={index}>
            <CardList data={data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
