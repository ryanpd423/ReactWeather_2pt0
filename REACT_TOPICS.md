 # :smiling_imp: :cyclone: :skull_and_crossbones: React Lunch & Learn Topics :satellite: :floppy_disk: :pill: :volcano:
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
* :zap:Heroku:zap:
  * PaaS
  * Deploying our application so that it can run anywhere
  * Heroku CLI
    * I installed on Mac via Homebrew
    * `heroku create`
      * gives us a custom URL
      * adds a new heroku remote onto our git repo
    * `git push heroku master`
      * before you run `git push heroku master`
        * if you are working on a dev branch
          * commit you changes, push them, open a PR and merge your feature into master, then checkout master locally, pull down the updated master code and then run `git push heroku master`
            * This pushes our master branch up to the heroku remote
          * I wasn't able to get `git push heroku dev_branch` to work the first time I tried it.  By work I mean when I ran `heroku open` after I ran that command my app still wouldn't start.
            * It's probably possible to not have to be on `master` and have your latest and greatest code local before you push to rebuild your app on heroku, but at least for now this is working
            * `CI Upgrade TODO:` I think I'd want to have some CI setup so that everytime I push changes to my `feature branch` in GitHub that it rebuilds a `staging` version of heroku and then when I merge into `master` it rebuilds the `prod` version of heroku
      * this will push our code up to the server, build it, and deploy it
      * `heroku open` => will launch the application in a browser
      * `heroku logs` => displays logs should you have any issues
        * `https://devcenter.heroku.com/articles/logging#view-logs`
    * Dashboard
      * `https://dashboard.heroku.com`
      * login: email
      * pw: should be saved in
      * app name: `glacial-shelf-57392`
  * Foundation
    * a front-end framework like Bootstrap
    * `https://get.foundation/sites/docs/`
    * Grid Systems
    * **TODO**: look for quick and easy to understand explanation of what css grid systems are and why they are helpful
      * CSS Frameworks provide grid systems to allow web pages to adapt to changing screen sizes and re-size themselves appropriately while keeping the display rendering the correct way
      * Page is divided up into 12 left-to-right partioned columns of "size 1"
      * Ex: `<div className="column medium-6 large-4 small-centered">`
        * when the page size is medium the screen is divided into two columns of size 6 (`12/2 = 6`)
        * when the page size is large the screen is divided into three columns of size 4 (`12/3 = 4`)
        * when the page is small the screen has 12 columns of "size 1"
      * 