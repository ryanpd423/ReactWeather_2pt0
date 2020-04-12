var React = require('react');
var Nav = require('Nav');
// import React from 'react'; // as of 3-1-2020 unable to get the ES6 syntax to work

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Nav/>
                <h2>Main Component</h2>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;

// as of 3-1-2020 unable to get the ES6 syntax to work
// class Main extends React.Component {
//     render() {
//         return(
//             <h2>Main Component</h2>
//         );
//     }
// };

// export default Main;