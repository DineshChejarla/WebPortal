import React, { useState } from "react";

const City = () => {
  const [cityName, setCityName] = useState("");

  const handleCityChane = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div>
      <label htmlFor="Nellore">
        <input
          name="city"
          type="radio"
          onChange={(e) => handleCityChane(e)}
          value={"Nellore"}
        />
        Nellore
      </label>

      <input
        name="city"
        type="radio"
        onChange={(e) => handleCityChane(e)}
        value={"Mumbai"}
      />
      <input
        name="city"
        type="radio"
        onChange={(e) => handleCityChane(e)}
        value={"Hyderabad"}
      />
      <h1>Your selected city: {cityName}</h1>
    </div>
  );
};

export default City;
