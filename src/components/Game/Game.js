import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";
import EndBanner from "../EndBanner";
import Keyboard from "../Keyboard";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
// To make debugging easier, we'll log the solution in the console.

function Game() {
    // Pick a random word on every pageload.
    const [answer, setAnswer] = React.useState( () => sample(WORDS) );
    const [guesses, setGuesses] = React.useState([]);
    const [gameMode, setGameMode] = React.useState("playing");
    function resetGame() {
        setGuesses( [] );
        setAnswer( () => sample(WORDS) );
        setGameMode( 'playing' );
    }
    console.info({ answer });
  return (
    <>
      <GuessResults
        guesses={guesses}
        answer={answer}
        setGameMode={setGameMode}
      />
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        gameMode={gameMode}
        setGameMode={setGameMode}
        answer={answer}
      />
      <Keyboard guesses={guesses} answer={answer} />
      {gameMode !== "playing" && (
        <EndBanner gameMode={gameMode} guesses={guesses} answer={answer} resetGame={resetGame}/>
      )}
    </>
  );
}

export default Game;
