import React from 'react';

const ForecastDisplay = ({ data }) => {
  return (
    <div>
      <h2>5-Day Forecast</h2>
      {data.list.map((item, index) => (
        <div key={index}>
          <p>Date: {item.dt_txt}</p>
          <p>Temperature: {item.main.temp}°C</p>
          <p>Condition: {item.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastDisplay;
