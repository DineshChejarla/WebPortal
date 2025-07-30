import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5135/WeatherForecast")
      .then((response) => setWeatherData(response.data));
  }, []);

  return (
    <div>
      <h2>Weather Data</h2>
      <pre>{JSON.stringify(weatherData, null, 2)}</pre>
    </div>
  );
};

export default Weather;
