import React from 'react'
import { Row, Col } from 'react-bootstrap';

export default function Unsolvedwords({ unsolvedWords }) {
  return (
    <div>
      <h1>Unsolved words</h1>
      {
        unsolvedWords.map(x => (
          <div>
            {x}
          </div>
        ))
      }
    </div>
  )
}
