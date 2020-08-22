import React from 'react'
import Signup from '../signup/signup';
import Welcomeback from '../layout/welcome.back';
import { Row, Col } from 'react-bootstrap';
import Alphabetcomp from '../alphabet/alphabet';
import Wrongletters from '../layout/wrong.letters';
import Previoussolved from '../layout/previous.solved';
import Hiddenword from '../layout/hidden.word';
import Unsolvedwords from '../layout/unsolved.words';

export default function Userinfo({
  userName,
  handleChange,
  userNameSubmitted,
  userSubmittedInfo,
  randomWord,
  hiddenWord,
  alphabet,
  letterClicked,
  wrongSelected,
  previousWords,
  unsolvedWords,
  amountOfTries
}) {
  return userSubmittedInfo ? (
    <div>
      <Welcomeback userName={userName} />
      {randomWord}
      <br />
      <Hiddenword hiddenWord={hiddenWord} amountOfTries={amountOfTries} />
      <Alphabetcomp
        alphabet={alphabet}
        letterClicked={letterClicked}
        amountOfTries={amountOfTries}
      />
      {wrongSelected.length > 0 ? (<Wrongletters wrongSelected={wrongSelected} />) : null}
      <Row>
        <Col lg={6}>
          <Previoussolved previousWords={previousWords} />
        </Col>
        <Col lg={6}>
          <Unsolvedwords unsolvedWords={unsolvedWords} />
        </Col>
      </Row>
      <br />
    </div>
  )
    :
    <Signup
      userName={userName}
      handleChange={handleChange}
      userNameSubmitted={userNameSubmitted}
    />
}
