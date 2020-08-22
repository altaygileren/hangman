import axios from 'axios';
let SOLVED_WORDS = 'words';
let USERNAME = 'username';
let UNSOLVED_WORDS = 'unsolved_words';

// Return user name
export const userData = (userKey = USERNAME) => {
  if (localStorage && localStorage.getItem(userKey)) {
    return JSON.parse(localStorage.getItem(userKey));
  }
  return null;
}
// Set username
export const setUser = (value, userName = USERNAME) => {
  if (localStorage) {
    localStorage.setItem(userName, JSON.stringify(value));
  }
}


// Set users words
export const setWords = (value, words = SOLVED_WORDS) => {
  if (localStorage) {
    localStorage.setItem(words, JSON.stringify(value));
  }
};
// Return all previous words solved
export const previousWords = (words = SOLVED_WORDS) => {
  if (localStorage && localStorage.getItem(words)) {
    return JSON.parse(localStorage.getItem(words));
  }
}


// Get all unsolved words
export const getUnsolvedWords = (words = UNSOLVED_WORDS) => {
  if (localStorage && localStorage.getItem(words)) {
    return JSON.parse(localStorage.getItem(words));
  }
}
// Set unsolved words
export const setWrongWords = (value, words = UNSOLVED_WORDS) => {
  if (localStorage) {
    localStorage.setItem(words, JSON.stringify(value));
  }
}