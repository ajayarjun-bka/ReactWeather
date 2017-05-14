var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherResult = require('WeatherResult');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');
const { browserHistory } = require("react-router");

var Weather = React.createClass({
  getInitialState: function() {
    return ({isLoading: false});
  },
  handleResponse: function(data) {
    var that = this;
    this.setState({
      isLoading: true,
      error: undefined,
      loc:undefined,
      temperature:undefined
    });
    OpenWeatherMap.getTemp(data).then(function(result) {
      that.setState({loc: result.name, temperature: result.temp, isLoading: false});
    }, function(e) {
      that.setState(
        {
        isLoading: false,
        error:e.message
      });
      console.log(e.message+ 'weather.jsx');
    });
  },
  componentWillReceiveProps: function(newProps)
  {
    // alert('triggered');
    // console.log(newProps);
    var location = newProps.location.query.location;
    if(location && location.length>0)
    {
      this.handleResponse(location);
      browserHistory.push(`/`);
      //window.location.hash="#/"
    }
  },
  componentDidMount:function()
  {
    var location = this.props.location.query.location;
    if(location && location.length>0)
    {
      this.handleResponse(location);
      //window.location.hash="#/"
      browserHistory.push(`/`);
    }
  },
  render: function() {
    var {isLoading, loc, temperature, error} = this.state;
    function renderModal()
    {
      //console.log(error);
      if(typeof error === "string")
      {
        return(
        <ErrorModal message={error}/>
      );
      }
    }
    function renderMessage() {
      if (isLoading) {
        return (
          <h3 className="text-center">Fethcing Weather</h3>
        );
      } else if (loc && temperature) {
        return (<WeatherResult location={loc} temperature={temperature}/>);
      }
    }

    return (
      <div>
        <h2 className="text-center page-title">Get Weather</h2>
        <WeatherForm getLocation={this.handleResponse}/>
        {renderMessage()}
        {renderModal()}
      </div>
    );
  }
})

module.exports = Weather;
