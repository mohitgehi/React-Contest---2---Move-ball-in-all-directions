import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  const buttonClickHandler = () => {
    setRenderBall(true);
  };
  const reset = () => {
    setBallPosition({ left: "0px", top: "0px" });
    setX(0);
    setY(0);
    setRenderBall(false);
    renderChoice();
  };
  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball"></div>;
    } else
      return (
        <button className="start" onClick={buttonClickHandler}>
          Start
        </button>
      );
  };
  const click = (event) => {
    const copyBallPosition = { ...ballPosition };
    if (event.keyCode === 39) {
      copyBallPosition.left = +copyBallPosition.left.slice(0, -2) + 5 + "px";
    } else if (event.keyCode === 40) {
      copyBallPosition.top = +copyBallPosition.top.slice(0, -2) + 5 + "px";
    } else if (event.keyCode === 38) {
      copyBallPosition.top = +copyBallPosition.top.slice(0, -2) - 5 + "px";
    } else if (event.keyCode === 37) {
      copyBallPosition.left = +copyBallPosition.left.slice(0, -2) - 5 + "px";
    }
    console.log(copyBallPosition);
    setBallPosition(copyBallPosition);
  };
  React.useEffect(() => {
    document.addEventListener("keydown", click);
    return () => {
      document.removeEventListener("keydown", click);
    };
  });
  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
