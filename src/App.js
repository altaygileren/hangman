import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Spinnerloading from "./components/spinner/spinner.loading";
import Userinfo from "./components/user.info/user.info";
import {
  setUser,
  userData,
  previousWords,
  setWords,
  getUnsolvedWords,
  setWrongWords,
} from "./utils/index";
import randomWords from "random-words";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      loading: true,
      userSubmittedInfo: false,
      randomWord: "",
      wordsSolved: [],
      hiddenWord: [],
      wrongSelected: [],
      alphabet: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ],
      previousWords: [],
      unsolvedWords: [],
      amountOfTries: 0,
    };
  }

  startGame = async () => {
    const dictionaryWord = randomWords();
    this.dashInput(dictionaryWord);
    setTimeout(() => {
      const user = userData() ? userData() : "";
      const previousSolved = previousWords() ? previousWords() : null;
      const unsolvedWord = getUnsolvedWords() ? getUnsolvedWords() : null;
      this.setState({
        loading: false,
        userName: user,
        userSubmittedInfo: user ? true : false,
        randomWord: dictionaryWord,
        previousWords: previousSolved ? previousSolved : [],
        unsolvedWords: unsolvedWord ? unsolvedWord : [],
        amountOfTries: dictionaryWord.length,
      });
    }, 100);
  };

  componentDidMount = () => {
    this.startGame();
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  letterClicked = (letter) => {
    let { randomWord } = this.state;
    randomWord.includes(letter)
      ? this.fillLetter(letter)
      : this.wrongSelection(letter);
  };

  wrongSelection = (letter) => {
    let { wrongSelected, amountOfTries } = this.state;
    this.setState(
      {
        wrongSelected: [...wrongSelected, letter],
        amountOfTries: amountOfTries - 1,
      },
      () => this.checkGame()
    );
  };

  fillLetter = (letter) => {
    let { randomWord, hiddenWord } = this.state;
    for (let i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === letter) {
        hiddenWord[i] = letter;
        this.setState({ hiddenWord: hiddenWord });
      }
    }
    this.checkGame();
  };

  checkGame = () => {
    if (this.state.amountOfTries < 1) {
      this.gameOver();
    } else if (!this.state.hiddenWord.includes("_")) {
      this.winGame();
    }
  };

  winGame = () => {
    const { randomWord } = this.state;
    setTimeout(() => {
      this.setState(
        {
          previousWords: [...this.state.previousWords, randomWord],
          hiddenWord: [],
        },
        () => setWords(this.state.previousWords)
      );
    }, 1000);
    this.startGame();
  };

  gameOver = () => {
    let { unsolvedWords, randomWord } = this.state;
    if (!unsolvedWords.includes(randomWord)) {
      alert("Game over you lost");
      setTimeout(() => {
        this.setState(
          {
            unsolvedWords: [...unsolvedWords, randomWord],
            amountOfTries: 0,
            hiddenWord: [],
            wrongSelected: [],
          },
          () => setWrongWords(this.state.unsolvedWords)
        );
      }, 100);
      this.startGame();
    }
  };

  dashInput = (word) => {
    if (this.state.hiddenWord.length < 0) {
      this.setState({ hiddenWord: [] });
    }
    for (let i = 0; i < word.length; i++) this.state.hiddenWord.push("_");
  };

  userNameSubmitted = () => {
    let { userName } = this.state;
    this.setState({ userSubmittedInfo: true, userName: userName }, () =>
      setUser(userName)
    );
  };

  render() {
    let {
      userName,
      alphabet,
      hiddenWord,
      userSubmittedInfo,
      randomWord,
      wrongSelected,
      previousWords,
      unsolvedWords,
      amountOfTries,
    } = this.state;
    return (
      <div className="App">
        {this.state.loading ? (
          <Spinnerloading />
        ) : (
          <Userinfo
            userNameSubmitted={this.userNameSubmitted}
            handleChange={this.handleChange}
            userName={userName}
            userSubmittedInfo={userSubmittedInfo}
            randomWord={randomWord}
            hiddenWord={hiddenWord}
            alphabet={alphabet}
            letterClicked={this.letterClicked}
            wrongSelected={wrongSelected}
            previousWords={previousWords}
            unsolvedWords={unsolvedWords}
            amountOfTries={amountOfTries}
          />
        )}
      </div>
    );
  }
}

export default App;
