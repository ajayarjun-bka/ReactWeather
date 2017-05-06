var React  = require('react');

var WeatherResult= ({temperature, location}) =>{
    return(
      <div>
      <h3>It's {temperature} in {location}</h3>
      </div>
    )
  };

module.exports = WeatherResult;
