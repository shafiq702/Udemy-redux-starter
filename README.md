# Starter Kit for Redux Bootcamp on Udemy

## Get Started
1. **Install [Node 8](https://nodejs.org)**
2. **Clone this repository.** - `git clone https://github.com/shafiq702/udemy-redux-starter.git`
3. **Make sure you're in the directory you just created.** - `cd udemy-redux-starter`
4. **Install Node Packages.** - `npm install`
5. **Run the app.** - `npm start -s`
This will kick off the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching files all your files. When you save, the code will rebuild, lint will run, and tests will run automatically. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.
6. **[Disable safe write](http://webpack.github.io/docs/webpack-dev-server.html#working-with-editors-ides-supporting-safe-write)** to assure hot reloading works properly.
7. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome.


## Having Issues? Try these things first:
1. Run `npm install` - If you forget to do this, you'll see this: `babel-node: command not found`. error letting you know that the 'babl-node' package is not listed in your directories.
2. Make sure the path doesn't include any spaces.
3. Make sure you're running the latest version of Node. Or, use [Node 6.11.12](https://nodejs.org/en/download/) if you're having issues on Windows. Node 6 might have issues on some Windows machines.
4. Make sure files with names that begin with a dot (.babelrc, .editorconfig, .eslintrc) are copied to the project directory root.
5. Don't run the project from a symbolic link. It will cause issues with file watches.
6. Use path.resolve on all path references in both the dev and prod webpack.config.
7. Delete any .eslintrc in your user directory and disable any ESLint plugin / custom rules within your editor since these will conflict with the ESLint rules defined in the course.
8. If you're using Windows, open your console as an administrator. This will assure the console has the necessary rights to perform installs.
9. Ensure you do not have NODE_ENV=production in your env variables as it will not install the devDependencies.
10. Nothing above work? Delete your node_modules folder and re-run npm install.

### Production Dependencies
| **Dependency** | **Use** |
|----------|-------|
|babel-polyfill | Polyfill for Babel features that cannot be transpiled |
|bootstrap|CSS Framework|
|jquery|Only used to support toastr|
|react|React library |
|react-dom|React library for DOM rendering |
|react-redux|Redux library for connecting React components to Redux |
|react-router|React library for routing |
|react-router-redux|Keep React Router in sync with Redux application state|
|redux|Library for unidirectional data flows |
|redux-thunk|Async redux library|
|toastr|Display messages to the user|

### Development Dependencies
| **Dependency** | **Use** |
|----------|-------|
|babel-cli|Babel Command line interface |
|babel-core|Babel Core for transpiling the new JavaScript to old |
|babel-loader|Adds Babel support to Webpack |
|babel-plugin-react-display-name| Add displayName to React.createClass calls |
|babel-preset-es2015|Babel preset for ES2015|
|babel-preset-react| Add JSX support to Babel |
|babel-preset-react-hmre|Hot reloading preset for Babel|
|babel-register|Register Babel to transpile our Mocha tests|
|cheerio|Supports querying DOM with jQuery like syntax - Useful in testing and build process for HTML manipulation|
|colors|Adds color support to terminal |
|compression|Add gzip support to Express|
|cross-env|Cross-environment friendly way to handle environment variables|
|css-loader|Add CSS support to Webpack|
|enzyme|Simplified JavaScript Testing utilities for React|
|eslint|Lints JavaScript |
|eslint-plugin-import|Advanced linting of ES6 imports|
|eslint-plugin-react|Adds additional React-related rules to ESLint|
|eslint-watch|Add watch functionality to ESLint |
|eventsource-polyfill|Polyfill to support hot reloading in IE|
|expect|Assertion library for use with Mocha|
|express|Serves development and production builds|
|extract-text-webpack-plugin| Extracts CSS into separate file for production build | 
|file-loader| Adds file loading support to Webpack |
|jsdom|In-memory DOM for testing|
|mocha| JavaScript testing library |
|nock| Mock HTTP requests for testing |
|npm-run-all| Display results of multiple commands on single command line |
|open|Open app in default browser|
|react-addons-test-utils| Adds React TestUtils |
|redux-immutable-state-invariant|Warn when Redux state is mutated|
|redux-mock-store|Mock Redux store for testing|
|rimraf|Delete files |
|style-loader| Add Style support to Webpack |
|url-loader| Add url loading support to Webpack |
|webpack| Bundler with plugin system and integrated development server |
|webpack-dev-middleware| Adds middleware support to webpack |
|webpack-hot-middleware| Adds hot reloading to webpack |
# Udemy-redux-starter
