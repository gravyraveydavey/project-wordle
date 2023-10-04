import React from "react";

function EndBanner({ gameMode, guesses, answer }) {
  if (gameMode === "win") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in <strong>{guesses.length} guesses</strong>.
        </p>
      </div>
    );
  } else {
    return (

    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
    );
  }
}

export default EndBanner;
