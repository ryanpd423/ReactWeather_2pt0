var React = require('react');

var About = React.createClass({
    render: function() {
        return (
            <div>
                <h1 className="text-centered">About</h1>
                <div className="card">
                    <div className="card-divider">
                        This is Single Page Web Application built with React
                    </div>
                    <div className="card-section">
                        <a href="https://github.com/ryanpd423/ReactWeather_2pt0">Check me out on Github!</a>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = About;