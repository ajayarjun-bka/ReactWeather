var React = require('react');
var Nav = require('Navigation');

// var Main = React.createClass({
//   render:function()
//   {
//     return(
//       <div>
//         <Nav/>
//         <h1>Main Componnent</h1>
//         {this.props.children}
//       </div>
//     )
//   }
// });

var Main = (props)=>{
    return(
      <div>
        <Nav/>
        <h1>Main Componnent</h1>
        {props.children}
      </div>
    )
  };


module.exports = Main;
