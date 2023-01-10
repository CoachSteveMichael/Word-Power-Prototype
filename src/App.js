import "./styles.css";
//https://rapidapi.com/dickyagustin/api/text-translator2/
import { useState, useEffect } from "react";
import { GameContainer } from "./components/GameContainer";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <GameContainer />
    </div>
  );
}
