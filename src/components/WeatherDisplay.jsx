import React from 'react';

const WeatherDisplay = ({ data }) => {
  return (
    <div>
      <h2>Current Weather</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Condition: {data.weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;