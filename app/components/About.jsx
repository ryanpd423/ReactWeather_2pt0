var React = require('react');

var About = React.createClass({
    render: function() {
        return (
            <div>
                <h1 className="text-centered">About</h1>
                <div>
                    <p>
                        This is a Weather Application built with React.
                        <p>
                            <a href="https://github.com/ryanpd423/ReactWeather_2pt0">Check me out on Github!</a>
                        </p>
                    </p>
                    <div>
                        <div>
                            <p>Below is a list of some of the tools I am using:</p>
                        </div>
                        <ul>
                            <li>
                                <a href="https://openweathermap.org/">Open Weather Map</a> - This is the free API I used to retrieve the weather data.
                            </li>
                            <li>
                                <a href="https://reactjs.org/">React</a> - I am using React by Facebook to build this SPA's Web UI.
                            </li>
                            <li>
                                <a href="https://webpack.js.org/">Webpack</a> - I am using Webpack to bundle my application.
                            </li>
                            <li>
                                <a href="https://babeljs.io/">Babel</a> - I am using Babel to transpile my React JSX down to vanilla JS.
                            </li>
                            <li>
                                <a href="https://get.foundation/sites/docs/">Foundation</a> - I am using Foundation to style the visual Web UI components.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>Helpful related articles: </p>
                    </div>
                    <ul>
                        <li>
                            <a href="https://www.freecodecamp.org/news/an-intro-to-webpack-what-it-is-and-how-to-use-it-8304ecdc3c60/">An intro to Webpack: what it is and how to use it</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = About;