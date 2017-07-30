import React from 'react';
import Request from 'superagent';

export class Weather extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

// For API info => https://openweathermap.org/current
  componentDidMount(){
    var url = "http://api.openweathermap.org/data/2.5/weather?id=4544349&APPID=b1b6e37db8c4e9d3949e64cce4f9366f&units=imperial";
    Request.get(url).then((response) => {
      console.log(response.body);
      this.setState({
        description: response.body.weather[0].description,
        tempature: response.body.main.temp
      })
    })
  }

  render() {
    return (
      <div className = "weather">
        <h2>The Tempature for Oklahoma City is {this.state.tempature}°F</h2>
        <h3>Currently: {this.state.description}</h3>
      </div>
    )
  }
}
