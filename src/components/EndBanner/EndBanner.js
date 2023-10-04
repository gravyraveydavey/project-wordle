import React from "react";

function EndBanner({ gameMode, guesses, answer, resetGame }) {
  if (gameMode === "win") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in <strong>{guesses.length} guesses</strong>.
        </p>
        <button onClick={ () => resetGame() }>Play Again</button>
      </div>
    );
  } else {
    return (

    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={ () => resetGame() }>Play Again</button>
    </div>
    );
  }
}

export default EndBanner;
