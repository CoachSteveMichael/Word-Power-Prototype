import React from "react";
import { Context } from "../ThemeContext";
import { useContext } from "react";

function Header(props) {
  const { points } = useContext(Context);

  return (
    <div className="header">
      <p onClick={props.reset} className="home">
        Home
      </p>
      <p>Points: {points}</p>
    </div>
  );
}

export { Header };
