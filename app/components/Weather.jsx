var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherResult = require('WeatherResult');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
getInitialState : function(){
    return({
      isLoading : false
    });
  },
  handleResponse: function(data) {
    var that = this;
    this.setState({isLoading:true});
    OpenWeatherMap.getTemp(data).then(function (result) {
      that.setState({
        loc:result.name,
        temperature:result.temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({
        isLoading: false
      });
        console.log(errorMessage);
    });
    },
  render: function() {
    var {isLoading, loc, temperature} = this.state;

    function renderMessage()
    {
      if(isLoading)
      {
        return(<h3>Fethcing Weather</h3>);
      }
      else if(loc && temperature)
      {
        return(<WeatherResult location={loc} temperature={temperature}/>);
      }
    }

    return (
      <div>
        <h3>GET WEATHER</h3>
        <WeatherForm getLocation={this.handleResponse}/>
        {renderMessage()}
      </div>
    );
  }
})

module.exports = Weather;
