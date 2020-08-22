import React from 'react'

export default function Previoussolved({ previousWords }) {
  return (
    <div>
      <h1>Solved words</h1>
      {
        previousWords !== null && previousWords.length > 0 ? (
          <div>
            {
              previousWords.map((x, i) => (
                <div key={i}>
                  {x}
                </div>
              ))
            }
          </div>
        ) : (null)
      }
    </div>
  )
}
