import React from "react";

export default function Card(props) {
  const {
    card: { src, title },
    handleGameLogic,
  } = props;

  return (
    <button className="card" onClick={handleGameLogic.bind(this, title)}>
      <figure>
        <img src={src} alt={title} />
      </figure>
    </button>
  );
}
