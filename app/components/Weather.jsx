var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMapApi = require('openWeatherMapApi');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false,
        }
    },

    handleSearch: function(location) {
        console.log('handleSearch');

        this.setState({
            isLoading: true,
        });

        // debugger; //this is how you add a break point to debug with React Dev Tools

        var that = this; // 'this' keyword loses context inside getTemp function 

        openWeatherMapApi.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (errorMessage) {
            that.setState({
                isLoading: false,
            });
            alert(errorMessage);
        });
    },

    render: function() {
        var temp = this.state.temp;
        var location = this.state.location;
        var isLoading = this.state.isLoading;

        function renderMessage () {
            if (isLoading) {
                return <h2 className="text-center">Fetching Weather...</h2>
            } else if ((temp && location)) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;