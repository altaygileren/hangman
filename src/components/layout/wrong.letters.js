import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function Wrongletters({ wrongSelected }) {
  return (
    <div>
      <h1>Wrong selected letters</h1>
      <Row>
        {
          wrongSelected.map(x => (
            <Col lg={1}>{x}</Col>
          ))
        }
      </Row>
    </div>
  )
}
