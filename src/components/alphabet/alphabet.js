import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './alphabet.styles.css';


export default function Alphabetcomp({
  alphabet,
  letterClicked,
  amountOfTries
}) {
  return (
    <div>
      <Row>
        {
          alphabet.map(x => (
            <Col lg={1}>
              <button className="letterBtn" onClick={() => letterClicked(x)}>{x}</button>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}
