import React from "react";

const Forecast = ({ forecast }) => {
  if (!forecast) return null;

  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-container">
        {forecast.map((item, index) => (
          <div key={index} className="forecast-item">
            <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
            <p>{item.weather[0].description}</p>
            <p>🌡 {item.main.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
