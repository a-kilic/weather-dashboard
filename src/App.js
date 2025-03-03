import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import Favorites from "./components/Favorites";
import "./App.css";

const API_KEY = "66d41af44aeb67e345ff5ad603f9551a";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const fetchWeather = async (city) => {
    try {
      const weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(weatherRes.data);

      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      setForecast(forecastRes.data.list.filter((item, index) => index % 8 === 0));
    } catch (error) {
      alert("City not found. Try again!");
    }
  };

  const addFavorite = (city) => {
    if (!favorites.includes(city)) {
      const updatedFavorites = [...favorites, city];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div className="container">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather} />
      <button onClick={() => addFavorite(weather?.name)}>⭐ Save to Favorites</button>
      <WeatherCard weather={weather} />
      <Forecast forecast={forecast} />
      <Favorites favorites={favorites} onSelect={fetchWeather} />
    </div>
  );
};

export default App;
