import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';

export default function Signup({
  userName,
  userInput,
  handleChange,
  userNameSubmitted,
  userSubmittedInfo
}) {
  return (
    <div>
      <h1>What is your name?</h1>
      <input
        value={userName}
        name='userName'
        onChange={handleChange}
        placeholder="Please type your name"
      />
      <br />
      <Button
        disabled={userSubmittedInfo}
        onClick={userNameSubmitted}
        variant={'primary'}
      >Hi there</Button>
    </div>
  )
}
