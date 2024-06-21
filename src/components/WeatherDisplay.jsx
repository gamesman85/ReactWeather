import React from 'react';

const WeatherDisplay = ({ data }) => {
  const weather = data.main;

  return (
    <div>
      <h2>Current Weather</h2>
      <p>Temperature: {weather.temp}°C</p>
      <p>Feels like: {weather.feels_like}°C</p>
      <p>Minimum Temperature: {weather.temp_min}°C</p>
      <p>Maximum Temperature: {weather.temp_max}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Condition: {data.weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;