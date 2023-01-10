import React from "react";

function EndScreen(props) {
  const { points, reset, gameRange } = props;
  console.log(points);
  return (
    <div className="endscreen">
      <h1>Good try!</h1>
      <h2>
        You got {points / 10} of {gameRange.length} correct!
      </h2>
      {points / 10 > gameRange.length * 0.7 ? (
        <p>Great Job! Want to try something harder?</p>
      ) : (
        <p>
          <span>Don't worry. </span>You're doing great. Review some more, and
          tomorrow will be easier.
        </p>
      )}
      <div onClick={reset} className="reset">
        Start Again
      </div>
    </div>
  );
}

export { EndScreen };
