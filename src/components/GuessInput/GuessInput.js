import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

function GuessInput( {guesses, setGuesses, answer, gameMode, setGameMode}) {
    const [ guess, setGuess ] = React.useState( '' );
  return (
    <form className="guess-input-wrapper" onSubmit={(event) => {
        event.preventDefault();
        //console.log( guess );
        if ( guesses.length + 1 < NUM_OF_GUESSES_ALLOWED ){
            const newGuesses = [ ...guesses, guess];
            setGuesses( newGuesses );
            setGuess( '' );
            if ( guess === answer){
                setGameMode( 'win' );
            }
        } else {
            setGuess( '' );
            setGameMode( 'lose' );
        }
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input type="text" name="guess-input" pattern="[A-Z]{5,5}" value={guess} disabled={gameMode !== 'playing'} onChange={ (event) => {
        setGuess( event.target.value.toUpperCase().substring(0, 5) )
      } }/>
    </form>
  );
}

export default GuessInput;
