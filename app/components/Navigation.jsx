var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
  render: function()
  {
    return(
      <div>
      <h2>Navigation Bar</h2>
      <IndexLink to='/' activeClassName = 'active' activeStyle={{color:'red'}} >Weather</IndexLink>
      <Link to='/about' activeClassName = 'active' activeStyle={{color:'red'}}> About </Link>
      <Link to='/examples' activeClassName = 'active' activeStyle={{color:'red'}}> Examples</Link>
    </div>
    );
  }
});

module.exports = Navigation;
