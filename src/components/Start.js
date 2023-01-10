import React from "react";

function Start(props) {
  const { startGame, level1, level2, level3, level4, level5 } = props;
  return (
    <div className="startpage">
      <h1 className="title">5 Minute Fluent</h1>
      <div className="menu">
        <h3>Pick a Level</h3>
        <ul>
          <li onClick={level1}>level 1</li>
          <li onClick={level2}>level 2</li>
          <li onClick={level3}>level 3</li>
          <li onClick={level4}>level 4</li>
          <li onClick={level5}>level 5</li>
        </ul>
      </div>
    </div>
  );
}

export { Start };
