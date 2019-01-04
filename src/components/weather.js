import React, { Component } from "react";

class Weather extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.country && this.props.city ? (
          <div>
            <p>
              Location: {this.props.country}, {this.props.city}
            </p>
            <p>Temperature: {this.props.temperature}</p>
            <p>Humidity: {this.props.humidity}</p>
            <p>Condition: {this.props.desc}</p>
          </div>
        ) : (
          <div>Empty {this.props.error}</div>
        )}
      </div>
    );
  }
}

export default Weather;
