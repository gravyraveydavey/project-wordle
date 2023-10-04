import React from "react";
import { checkGuess } from "../../game-helpers";
function Keyboard({ guesses, answer }) {
  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  const guessedLetters = {};
  guesses.map((guess) => {
    const checkedGuess = checkGuess(guess, answer);
    return checkedGuess.map(({ letter, status }) => {
      return (guessedLetters[letter] = status);
    });
  });

  return (
    <div className="keyboard">
      {keys.map((row, rowIndex) => (
        <div className="keyboard-row" key={rowIndex}>
          {row.map((key, keyIndex) => (
            <div
              className={`keyboard-key ${
                key in guessedLetters && guessedLetters[key]
              }`}
              key={keyIndex}
            >
              {key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
