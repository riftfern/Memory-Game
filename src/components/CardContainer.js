import React, { useState, useEffect } from "react";
import Card from "./Card";
import kingOfSwords from "../images/king-of-swords.jpeg";
import queenOfSwords from "../images/queen-of-swords.jpeg";
import knightOfSwords from "../images/knight-of-swords.jpeg";
import pageOfSwords from "../images/page-of-swords.jpeg";
import kingOfPentacles from "../images/king-of-pantacles.jpeg";
import queenOfPentacles from "../images/queen-of-swords.jpeg";
import knightOfPentacles from "../images/knight-of-pentacles.jpeg";
import pageOfPentacles from "../images/page-of-pentacles.jpeg";
import kingOfWands from "../images/king-of-wands.jpeg";
import queenOfWands from "../images/queen-of-wands.jpeg";
import knightOfWands from "../images/knight-of-wands.jpeg";
import pageOfWands from "../images/page-of-wands.jpeg";
import kingOfCups from "../images/king-of-cups.jpeg";
import queenOfCups from "../images/queen-of-cups.jpeg";
import knightOfCups from "../images/knight-of-cups.jpeg";
import pageOfCups from "../images/page-of-cups.jpeg";

export default function CardContainer(props) {
  const { handleGameLogic, score, highScore } = props;

  let images = [
    { src: kingOfCups, title: "King of Cups" },
    { src: kingOfPentacles, title: "King of Pentacles" },
    { src: kingOfWands, title: "King of Wands" },
    { src: kingOfSwords, title: "King of Swords" },
    { src: queenOfCups, title: "Queen of Cups" },
    { src: queenOfPentacles, title: "Queen of Pentacles" },
    { src: queenOfWands, title: "Queen of Wands" },
    { src: queenOfSwords, title: "Queen of Swords" },
    { src: knightOfCups, title: "Knight of Cups" },
    { src: knightOfPentacles, title: "Knight of Pentacles" },
    { src: knightOfWands, title: "Knight of Wands" },
    { src: knightOfSwords, title: "Knight of Swords" },
    { src: pageOfCups, title: "Page of Cups" },
    { src: pageOfPentacles, title: "Page of Pentacles" },
    { src: pageOfWands, title: "Page of Wands" },
    { src: pageOfSwords, title: "Page of Swords" },
  ];

  const [cards, setNewCards] = useState(images);

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
