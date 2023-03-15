import React, { useState } from "react";
import CardContainer from "./CardContainer";
import Header from "./Header";

export default function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardsArr, addCard] = useState([]);

  const handleScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleHighScore = () => {
    setHighScore(score);
  };

  const handleCard = (cardName) => {
    addCard((prevArr) => [...prevArr, cardName]);
  };

  const reset = () => {
    setScore(0);
    addCard([]);
  };

  const handleGameLogic = (cardName) => {
    if (!cardsArr.includes(cardName)) {
      handleCard(cardName);
      handleScore();
    } else {
      handleHighScore();
      reset();
    }
  };

  return (
    <>
      <Header score={score} highScore={highScore} />
      <div className="card-container" id="card-container">
        <CardContainer
          handleGameLogic={handleGameLogic}
          score={score}
          highScore={highScore}
        />
      </div>
    </>
  );
}
