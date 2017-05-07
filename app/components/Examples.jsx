var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
          </li>
          <li>
            <Link to='/?location=Rio'>Rio, Brazil</Link>
          </li>
        </ol>
      </div>
    );
  }
})

// var Examples = ()=>{
//   return(
//     <div>
//     <h1 className="text-center">Example</h1>
//     <p> Here are few example locations to try out</p>
//     <ol>
//       <li>
//         <Link to="/?location=LosAngeles">Los Angeles</Link>
//       </li>
//       <li>
//         <Link to="/?location=San Jose">San Jose</Link>
//       </li>
//     </ol>
//   </div>
//   );
//   };

module.exports = Examples;
