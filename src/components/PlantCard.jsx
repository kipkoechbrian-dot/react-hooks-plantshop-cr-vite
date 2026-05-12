import React, { useState } from "react";

function PlantCard({ plant }) {
  const [soldOut, setSoldOut] = useState(false);

  return (
    <li className="card" data-testid="plant-item">
      <img alt={plant.name} src={plant.image} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p> {/* ✅ no $ sign */}
      <button onClick={() => setSoldOut(!soldOut)}>
        {soldOut ? "Out of Stock" : "In Stock"} {/* ✅ wording fixed */}
      </button>
    </li>
  );
}

export default PlantCard;
