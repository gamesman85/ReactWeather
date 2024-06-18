import React, { useState } from 'react';
import Search from './components/Search';
import WeatherDisplay from './components/WeatherDisplay';
import ForecastDisplay from './components/ForecastDisplay';

const API_KEY = import.meta.env.VITE_API_KEY;

const fetchWeatherData = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  const data = await response.json();
  return data;
};

const fetchForecastData = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
  const data = await response.json();
  return data;
};

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleSearch = async () => {
    const weather = await fetchWeatherData(city);
    const forecast = await fetchForecastData(city);
    setWeatherData(weather);
    setForecastData(forecast);
  };

  return (
    <div className="App">
      <Search city={city} setCity={setCity} handleSearch={handleSearch} />
      {weatherData && <WeatherDisplay data={weatherData} />}
      {forecastData && <ForecastDisplay data={forecastData} />}
    </div>
  );
};

export default App;