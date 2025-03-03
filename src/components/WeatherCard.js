import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather) return <p className="info">Search for a city to see the weather.</p>;

  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p>{weather.weather[0].description}</p>
      <p>🌡 Temperature: {weather.main.temp}°C</p>
      <p>💨 Wind: {weather.wind.speed} m/s</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
