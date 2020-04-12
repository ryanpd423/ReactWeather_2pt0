module.exports = {
    entry: './app/app.jsx',
    output: {
        path: './public/',
        filename: 'bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Weather: 'app/components/Weather.jsx',
            About: 'app/components/About.jsx',
            Examples: 'app/components/Examples.jsx',
            WeatherMessage: 'app/components/WeatherMessage.jsx',
            WeatherForm: 'app/components/WeatherForm.jsx',
            openWeatherMapApi: 'app/api/openWeatherMapApi.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules)|(bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};