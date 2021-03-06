var React = require('react');
var ReactDOM = require('react-dom');

// MAIN COMPONENT
var {Route, Router, IndexRoute,browserHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//load css styles
require('style!css!sass!appstyles');


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component = {Main}>
    <Route path='about' component = {About}/>
    <Route path='examples' component = {Examples}/>
    <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
