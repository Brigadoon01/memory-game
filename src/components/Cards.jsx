import React from "react";
import "./Card.css";
const Cards = ({ card, handleChoice, flipped, disabled }) => {
  const handleCick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          onClick={handleCick}
          alt="card back"
        />
      </div>
    </div>
  );
};

export default Cards;
