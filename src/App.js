import React, { PureComponent } from 'react';
import Hangman from './Hangman';
import { done, randomWord, renderWord } from './words';
import Style from './style.css';

// This shows you how to use the functions in words.js:
/*
const word = randomWord()
const guesses = ['a', 'e', 'i', 'o', 'u', 't', 'n']
console.log(word, guesses, renderWord(word, guesses), done(word, guesses))
*/

class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      progress: 0,
      word: randomWord(),
      guesses: [],
    }
  }

  render() {
    const {
      progress,
      word,
      guesses,
    } = this.state
    /*  map(letter => <button onClick={() => this.seState({ letter }) > A</button>) */
    if (done(word, guesses)) {
      return (
        <div>YOU WON!
          Congrats
      </div>
      )
    }

    return (
      <div>
        <div>
          {/* This is how we render the hanging man */}
          <Hangman progress={progress} />
        </div>
        <input type="text" value={renderWord(word, guesses)} />
        {'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => this.renderInputButton(letter))}
        <p>{guesses}</p>

      </div>
    )
  }
  renderInputButton(letter) {
    const {
      progress,
      word,
      guesses
    } = this.state
    return (
      <button onClick={() => this.setState({
        guesses: [letter, ...guesses],
        progress: word.indexOf(letter) > -1 ? progress : progress + 1,
        // word: done(word, guesses)  == word ? alert("YOU WON") : word
      })}>
        {letter}
      </button>
    )
  }
}
export default App;