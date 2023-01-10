import { Context } from "../ThemeContext";
import { useContext, useState } from "react";
import { Card } from "./Card.js";
import { Start } from "./Start";
import { Header } from "./Header.js";
import { result } from "./data.js";
import { EndScreen } from "./EndScreen";

function GameContainer(props) {
  const { translations, points, setPoints } = useContext(Context);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [gameRange, setGameRange] = useState(translations);

  let onefifth = translations?.length / 5;

  function level1() {
    setGameRange(translations.slice(0, onefifth));
    startGame();
  }

  function level2() {
    setGameRange(translations.slice(onefifth, onefifth * 2));
    startGame();
  }

  function level3() {
    setGameRange(translations.slice(onefifth * 2, onefifth * 3));
    startGame();
  }

  function level4() {
    setGameRange(translations.slice(onefifth * 3, onefifth * 4));
    startGame();
  }

  function level5() {
    setGameRange(translations.slice(onefifth * 4, onefifth * 5));
    startGame();
  }
  function reset() {
    setStarted(false);
    setCount(0);
    setDisabled(false);
    setPoints(0);
  }
  function startGame() {
    setStarted(true);
    setCount(0);
    setDisabled(false);
    setPoints(0);
  }

  function changeDisabled() {
    setDisabled(!disabled);
  }
  function nextCard() {
    setDisabled(true);

    setTimeout(() => {
      setCount((prev) => (prev += 1));
      setDisabled(false);
    }, 1000);
    console.log(count, mapped.length);
  }
  let mapped = gameRange?.map((ele) => {
    return (
      <Card
        english={ele.english}
        korean={ele.korean}
        value={ele.value}
        checked={ele.checked}
        key={ele.id}
        id={ele.id}
        nextCard={nextCard}
        disabled={disabled}
        setDisabled={setDisabled}
        count={count}
        gameRange={gameRange}
      />
    );
  });

  let cardElements =
    count < mapped?.length ? (
      mapped[count]
    ) : (
      <div>
        <EndScreen reset={reset} points={points} gameRange={gameRange} />
      </div>
    );
  return (
    <div className="gameContainer">
      {!started ? "" : <Header reset={reset} />}
      {started ? (
        <div>{cardElements}</div>
      ) : (
        <Start
          startGame={startGame}
          level1={level1}
          level2={level2}
          level3={level3}
          level4={level4}
          level5={level5}
        />
      )}
    </div>
  );
}

export { GameContainer };
