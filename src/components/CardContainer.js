import React, { useState, useEffect } from "react";
import Card from "./Card";
import IMAGES from "../images";

export default function CardContainer(props) {
  const { handleGameLogic, score, highScore } = props;

  let images = [
    {
      src: kingOfSwords,
      title: "King of Swords",
    },
    {
      src: kingOfPentacles,
      title: "King of Pentacles",
    },
    {
      src: kingOfWands,
      title: "King of Wands",
    },
    {
      src: kingOfCups,
      title: "King of Cups",
    },
  ];

  const { cards, setNewCards } = useState(images);

  const shuffle = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * i);
      [newCards[randomIndex], newCards[i]] = [
        newCards[i],
        newCards[randomIndex],
      ];
    }
  };

  useEffect(() => {
    const newCards = [...cards];
    shuffle(newCards);
    setNewCards(newCards);
  }, [score, highScore]);

  return (
    <>
      {cards.map((card) => (
        <Card card={card} key={card.title} handleGameLogic={handleGameLogic} />
      ))}
    </>
  );
}
