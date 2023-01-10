import React from "react";
import { Context } from "../ThemeContext";
import { useContext } from "react";

function Card(props) {
  const {
    english,
    korean,
    nextCard,
    disabled,
    setDisabled,
    count,
    gameRange
  } = props;
  const { wrongAnswerArray, points, setPoints } = useContext(Context);
  console.log(wrongAnswerArray);

  function handleClick(id) {
    if (!disabled) {
      for (let i = 0; i < answers.length; i++) {
        if (answers[i].id === id) {
          if (answers[i].right) {
            setDisabled(true);
            console.log("right");
            nextCard();
            setPoints((prev) => (prev += 10));
          } else {
            setDisabled(true);
            console.log("wrong");
            nextCard();
          }
        }
      }
    }
  }

  let answers = [
    {
      value: 10,
      text: korean,
      selected: false,
      right: true,
      id: Math.random()
    },
    wrongAnswer(),
    wrongAnswer(),
    wrongAnswer()
  ].sort(() => Math.random() - 0.5);
  let answerElements = answers.map((ele) => (
    <div
      className={ele?.text === korean ? "right" : "wrong"}
      onClick={() => handleClick(ele?.id)}
    >
      {ele?.text}
    </div>
  ));

  function wrongAnswer() {
    let random = Math.floor(Math.random() * wrongAnswerArray.length);
    return {
      value: 0,
      text: wrongAnswerArray[random],
      selected: false,
      right: false,
      id: Math.random()
    };
  }

  return (
    <div className="card">
      <div className="prompt">
        <div className="english-prompt">
          <h1>{english}</h1>
        </div>
      </div>
      <div className="answer-box">{answerElements}</div>
      <p>
        {count + 1} of {gameRange.length}
      </p>
    </div>
  );
}

export { Card };
