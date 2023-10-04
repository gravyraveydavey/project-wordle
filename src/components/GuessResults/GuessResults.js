import React from "react";
import { range } from "../../utils"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import {checkGuess} from "../../game-helpers"

function GuessResults({ guesses, answer }) {
    const remainingGuesses = NUM_OF_GUESSES_ALLOWED - guesses.length;
    const guessSlots = range( 0, remainingGuesses );
    const dummyLetters = range( 0, 5 );
    const checkedGuesses = [];
    guesses.map( (guess, index) => {
        checkedGuesses.push( checkGuess(guess, answer) );
    })



  if (!guesses) {
    return false;
  }
  return (
    <div className="guess-results">
      {checkedGuesses.map(( checkedLetters, index) => (
        <p className="guess" key={index}>
          {checkedLetters.map((letterObj, letterIndex) => (
            <span className={`cell ${letterObj.status}`} key={letterIndex}>
              {letterObj.letter}
            </span>
          ))}
        </p>
      ))}
    {guessSlots.map((num, slot) => (
        <p className="guess" key={slot}>
            {dummyLetters.map((letter, letterIndex) => (
                <span className="cell" key={letterIndex}></span>
            ))}
        </p>
    ))}
    </div>
  );
}
export default GuessResults;
