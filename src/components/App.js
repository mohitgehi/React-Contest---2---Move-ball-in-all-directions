import React, { Component, useState } from "react";
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
  document.onkeydown = (event) => {
    if (event.keyCode === 39) {
      let right = ballPosition.left;
      let top = ballPosition.top;
      right = right.replace("px", "");

      setBallPosition({ left: parseInt(right) + 5 + "px", top: top });
      setX(parseInt(ballPosition.left.replace("px", "")));
    } else if (event.keyCode === 37) {
      let left = ballPosition.left.replace("px", "");
      let top = ballPosition.top;
      setBallPosition({ left: parseInt(left) - 5 + "px", top: top });
      setX(parseInt(ballPosition.left.replace("px", "")));
    } else if (event.keyCode === 38) {
      let top = ballPosition.top.replace("px", "");
      let left = ballPosition.left;
      setBallPosition({ left: left, top: parseInt(top) + 5 + "px" });
      setY(parseInt(ballPosition.top.replace("px", "")));
    } else if (event.keyCode === 40) {
      let down = ballPosition.top.replace("px", "");
      let left = ballPosition.left;
      setBallPosition({ left: left, top: parseInt(down) - 5 + "px" });
      setY(parseInt(ballPosition.top.replace("px", "")));
    }
  };

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
