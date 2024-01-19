import React, { useCallback, useEffect, useState } from "react";
import "./style.css";

const shuffledCards = ["A", "C", "A", "B", "B", "C"];

const FlipCardGame = () => {
  const [cards, setCards] = useState(
    shuffledCards.map((value) => ({ value, flipped: false }))
  );
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  const handleCardClick = (index) => {
    if (
      cards[index].flipped ||
      flippedIndexes.length === 2 ||
      matchedPairs.includes(cards[index].value)
    ) {
      return;
    }

    const updateCards = [...cards];
    updateCards[index].flipped = true;
    setFlippedIndexes([...flippedIndexes, index]);
    setCards(updateCards);
  };

  const checkMatch = useCallback(() => {
    const [index1, index2] = flippedIndexes;
    const updateCards = cards;

    if (updateCards[index1].value === updateCards[index2].value) {
      setMatchedPairs((pre) => [
        ...pre,
        updateCards[index1].value,
        updateCards[index2].value,
      ]);
    } else {
      updateCards[index1].flipped = false;
      updateCards[index2].flipped = false;
    }

    setCards(updateCards);
    setFlippedIndexes([]);
  }, [cards, flippedIndexes]);

  useEffect(() => {
    if (flippedIndexes.length === 2) {
      setTimeout(() => {
        checkMatch();
      }, 2000);
    }
  }, [flippedIndexes, checkMatch]);

  useEffect(() => {
    if (matchedPairs.length === shuffledCards.length) {
      alert("You Win");
    }
  }, [matchedPairs]);

  return (
    <div className="container">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`card ${card.flipped ? "flipped" : ""}`}
          onClick={() => handleCardClick(index)}
        >
          {card.flipped ? card.value : "?"}
        </div>
      ))}
    </div>
  );
};

export default FlipCardGame;
