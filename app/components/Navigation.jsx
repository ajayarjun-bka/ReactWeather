var React = require('react');
var {Link, IndexLink} = require('react-router');
const { browserHistory } = require("react-router");

var Navigation = React.createClass({
  onSearch: function(e)
  {
    e.preventDefault();
    var temp = this.refs.searchInput.value;
    var search = encodeURIComponent(temp);
    if(search && search.length>0){
      this.refs.searchInput.value="";
      //window.location.hash ='#/?location='+search;
      browserHistory.push(`/?location=${search}`);

    }

  },
  render: function() {
    return (
      <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">React Weather App</li>
              <li>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
              </li>
              <li>
                <Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
              </li>
              <li>
                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input type="search" placeholder="search weather by city" ref="searchInput"/>
                </li>
                <li>
                  <input type="submit" className="button" value="Get Weather"/>
                </li>
              </ul>
            </form>
          </div>
        </div>
      );
    }
  });

  module.exports = Navigation;
