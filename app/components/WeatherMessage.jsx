var React = require('react');

var WeatherMessage = React.createClass({
    render: function (){
        var temp = this.props.temp;
        var location = this.props.location;
        return (
            <div>
                <h2>WeatherMessage Component: It's {temp} degrees outside in {location}</h2>
            </div>
        );
    }
});

module.exports = WeatherMessage;