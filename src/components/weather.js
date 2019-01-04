import React from "react";

const Weather = props => {
  return (
    <div>
      {props.country && props.city ? (
        <div>
          <p>
            Location: {props.country}, {props.city}
          </p>
          <p>Temperature: {props.temperature}</p>
          <p>Humidity: {props.humidity}</p>
          <p>Condition: {props.desc}</p>
        </div>
      ) : (
        <div>{props.error}</div>
      )}
    </div>
  );
};

export default Weather;
