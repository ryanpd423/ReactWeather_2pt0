# React Lunch & Learn Topics
### Use the udemy video to research and breakdown the below topic points:
* remote repo push password: `hint: you use it a lot`
  * need to find a different way to authenticate because entering this password everytime I push is getting old
* SPA
* JavaScript
* React
    + This application was written using the older ES5 syntax, future apps will use ES6 or TypeScript
    + starting with ES5 and refactoring to ES6 (classes, arrow functions, etc.)
    + Client-Side Rendering
    + Front-End Routing (React Router)
    + React's One-way data binding and what it does...
      + One-way vs. Two-way data binding, what are they and what are differences?
    + Conditional Rendering() of Components based on state of our React App
* JSX
* Typescript (transitioning to it from JavaScript)
* Node
    + node_modules/
* NPM
    + 3rd party libraries:
      + Axios => API fetching
      + [Express](https://expressjs.com/en/api.html)
        + purpose of middle-ware api usage like `request.hostname` in the `server.js` file can be found at the Express api page via the link above
* Components
    + TODO: include a screen shot of the Weather app's component layout from Udemy video 
    + Container Components vs. Presentational Components
    + Data flow; ex: input into presentational flows up to container to set state and back down to another presentational
* Prop
* State
* Webpack
    + create-react-app vs. webpack management
    + What about Parcel?
    + Bundling
    + Webpack Config
* Babel
* React Dev Tools
  * To run the React Dev Tools on my Mac:
    * Navigate to dev/react-devtools/
    * `yarn build:extension`
    * wait for all of the stuff to build
    * `yarn run test:chrome`
    * launch dev tools in chrome process that starts: `fn + f12`
    * choose `React` from the devtools menu ribbon
* Debugger (Chrome)
  * You don't need the React Dev Tools to use the Chrome Debugger (see chrome debugger pics)
  * add `debugger;` on line in .jsx that you want the breakpoint in application to occur at
  * add the `devtool: 'cheap-module-eval-source-map'` as first class object in the `webpack.config.js` file
    * this module improve the debugging experience by allowing you to view the source files in the debugger and not the transpilled native javascript in the bundle.js file
    * see the before and after debugger photos
  * run `webpack` to rebuild
  * launch dev tools in chrome process that starts: `fn + f12`
  * choose `Sources` from the devtools menu ribbon
  * Run your application and fire an event that will cause the breakpoint to get hit
* Stateless Functional Components:
  * Syntactic Sugar
  * Skipped video; revisit and evaulate whether it's needed for a tutorial
* Heroku
  * PaaS
  * Deploying our application so that it can run anywhere
  * Heroku CLI
    * I installed on Mac via Homebrew
    * `git push heroku master`
      * this will push our code up to the server, build it, and deploy it
      * `heroku open` => will launch the application in a browser
      * `heroku logs` => displays logs should you have any issues