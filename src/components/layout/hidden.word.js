import React from 'react'
import { Row, Col } from 'react-bootstrap';

export default function Hiddenword({ hiddenWord, amountOfTries }) {
  return (
    <div>
      <h3>You have {amountOfTries} tries</h3>
      {
        hiddenWord.map((x, i) => (
          <span className="underline-span">
            {x}
          </span>
        ))
      }
    </div>
  )
}
