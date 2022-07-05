import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(1);
  const [boxes, setBoxes] = useState([
    <div className="column">1</div>,
    <div className="column">2</div>,
    <div className="column">3</div>,
    <div className="column">4</div>,
    <div className="column">5</div>,
  ]);
  const [boxColored, setBoxColored] = ([])

  const start = () => {
    var tempBoxColored = []
    for(let i=0; i<count; i++){
      let num = Math.floor(Math.random() * 5);
      tempBoxColored.push(num)
    } 
    setBoxColored(tempBoxColored)


    let tempboxes  = tempBoxColored.map(num => {

    });

  };

  const boxClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div className="scorebox">
        <p className="width50">Score: {score}</p>
        <p className="width50">High Score: {highScore}</p>
      </div>
      <div className="row">{boxes}</div>
      <div className="app scorebox">
        <button onClick={start}>Start</button>
      </div>
    </>
  );
}
