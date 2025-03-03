import React from "react";

const Favorites = ({ favorites, onSelect }) => {
  return (
    <div className="favorites">
      <h2>Favorites</h2>
      <ul>
        {favorites.map((city, index) => (
          <li key={index} onClick={() => onSelect(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
