var React = require('react');


var WeatherForm = React.createClass({
  onSubmit:function(e)
  {
    e.preventDefault();
    var location =this.refs.location.value;
    this.refs.location.value = '';
    this.props.getLocation(location);
  },
  render:function()
  {
    return(
      <form onSubmit={this.onSubmit}>
        <input type="text" ref = 'location' placeholder='Enter the Location'/>
        <button className="hollow button expanded">Get Weather</button>
      </form>
    )
  }
});

module.exports = WeatherForm;
