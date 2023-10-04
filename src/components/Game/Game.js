import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import {checkGuess} from "../../game-helpers"
import EndBanner from "../EndBanner"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameMode, setGameMode] = React.useState('playing');
  const guessLimit = 6;
  return (
    <>
      <GuessInput guesses={guesses} setGuesses={setGuesses} gameMode={gameMode} setGameMode={setGameMode} answer={answer} />
        <GuessResults guesses={guesses} answer={answer} setGameMode={setGameMode} />
      { gameMode !== 'playing' && <EndBanner gameMode={gameMode} guesses={guesses} answer={answer} /> }
    </>
  );
}

export default Game;
