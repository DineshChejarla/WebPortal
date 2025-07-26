// import MyImage from "../assets/images/CCC.svg";

// const Weather = () => {
//   return (
//     <>
//       <img src={MyImage} alt="My test Image1" />
//       <h1>Weather Page</h1>
//       <img src="https://placehold.co/600x400" alt="My Test Image2" />
//     </>
//   );
// };

// export default Weather;
import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5135/WeatherForecast")
      .then((response) => setWeatherData(response.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h2>Weather Data</h2>
      <pre>{JSON.stringify(weatherData, null, 2)}</pre>
    </div>
  );
};

export default Weather;
    
