import React from "react";

const Weather = props => {
  return (
    <div className="weather__info">
      {props.country && props.city ? (
        <div>
          <p className="weather__key">
            Location:{" "}
            <span className="weather__value">
              {props.country}, {props.city}
            </span>
          </p>
          <p className="weather__key">
            Temperature:{" "}
            <span className="weather__value">{props.temperature}</span>
          </p>
          <p className="weather__key">
            Humidity: <span className="weather__value">{props.humidity}</span>
          </p>
          <p className="weather__key">
            Condition: <span className="weather__value">{props.desc}</span>
          </p>
        </div>
      ) : (
        <p className="weather__error">{props.error}</p>
      )}
    </div>
  );
};

export default Weather;
