var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMapApi = require('openWeatherMapApi');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            location: 'Miami',
            temp: 78,
        }
    },
    handleSearch: function(location) {
        var that = this; // 'this' keyword loses context inside function
        openWeatherMapApi.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp
            });
        }, function (errorMessage) {
            alert(errorMessage)
        });
    },
    // TODO: continue on with video 34 'Faking...' @ 7:45
    render: function() {
        var temp = this.state.temp;
        var location = this.state.location;
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage temp={temp} location={location}/>
            </div>
        )
    }
});

module.exports = Weather;