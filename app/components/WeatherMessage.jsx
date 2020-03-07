var React = require('react');

var WeatherMessage = React.createClass({
    render: function (){
        return (
            <div>
                <h2>WeatherMessage Component: It's n degrees outside in STL</h2>
            </div>
        );
    }
});

module.exports = WeatherMessage;