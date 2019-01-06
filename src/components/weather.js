import React from "react";

const Weather = props => {
  let humidity = props.humidity;
  if (humidity > 70) {
    humidity += "% Thats humid humid";
  } else {
    humidity += "%";
  }
  return (
    <div className="weather__info">
      {props.country && props.city ? (
        <div>
          <p className="weather__key">
            <i class="fas fa-map-marked-alt" />:{" "}
            <span className="weather__value">
              {props.country}, {props.city}
            </span>
          </p>
          <p className="weather__key">
            <i class="fas fa-thermometer-empty" />:{" "}
            <span className="weather__value">{props.temp}&deg;c</span>
          </p>
          <p className="weather__key">
            <i class="fas fa-temperature-high" />:{" "}
            <span className="weather__value">{props.temp_max}&deg;c</span>
          </p>
          <p className="weather__key">
            <i class="fas fa-temperature-low" />:{" "}
            <span className="weather__value">{props.temp_min}&deg;c</span>
          </p>
          <p className="weather__key">
            <i class="fas fa-tint" />:{" "}
            <span className="weather__value">{humidity}</span>
          </p>
          <p className="weather__key">
            <i class="fas fa-sun" />:{" "}
            <span className="weather__value">{props.desc}</span>
          </p>
        </div>
      ) : (
        <p className="weather__error">{props.error}</p>
      )}
    </div>
  );
};

export default Weather;
