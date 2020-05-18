var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
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
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });

        // debugger; //this is how you add a break point to debug with React Dev Tools

        var that = this; // 'this' keyword loses context inside getTemp function 

        openWeatherMapApi.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
    },

    componentDidMount: function() {
        var location = this.props.location.query.location; // location is one of the query parameters in our url

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },

    componentWillReceiveProps: function(newProps) {
        var location = newProps.location.query.location; // location is one of the query parameters in our url

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },

    render: function() {
        var temp = this.state.temp;
        var location = this.state.location;
        var isLoading = this.state.isLoading;
        var errorMessage = this.state.errorMessage;

        function renderMessage() {
            if (isLoading) {
                return <h2 className="text-center">Fetching Weather...</h2>
            } else if ((temp && location)) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }

        function renderError(){
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}></ErrorModal>
                );
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
});

module.exports = Weather;