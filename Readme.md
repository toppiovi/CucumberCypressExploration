# Exploring Cypress and Cucumber Integration
![Ubuntu Build](https://github.com/toppiovi/CucumberCypressExploration/actions/workflows/ci-e2e.yml/badge.svg)



## Protractor vs Cypress
### Protractor
- Selenium WebDriver
- not reliable, uses page objects
- uses Web Connection to interact with browser
- [Protractor example](https://codeburst.io/bdd-with-angular-and-cucumberjs-8cb4c33c2dff)
### Cypress
- Stable
- Cypress test runner Runs in browser -> faster, more reliable
- Debugging
- Screenshots / Videos
- Auto waiting
- Good error messages / good docs -> Good dev ex
- set application state without going through ui
- [Cypress example (german)](https://angular.de/artikel/angular-cypress-typescript-e2e-testing/)

### Run
```
npm run e2e
```
## Cypress Setup
by default `ng e2e` will complain that e2e is not setup.
Select `ng add @cypress/schematic` and follow the CLI questions.
Rerun `ng e2e` and see how cypress (electorn app) will execute all your specs.
Cypress has added a default spec for starters. Those tests will fail of course.
Check the `cypress.json` config for setting up the tests directory.

Since cypress will generate a video for each run and a screenshot for each failed run, make sure to add those to your `.gitignore`:
```
**/cypress/screenshots/
**/cypress/videos/
```

## Select Elements in Cypress
Selecting elements by id/text is brittle and will break with ui/css changes.
Use [data-cy attribues](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements) instead.
Video for [best practices](https://www.youtube.com/watch?v=5XQOK0v_YRE
)
## Cypress CI integration
Use start-server-and-test to start webserver and test in CI environment.
Each run will generate a mp4 video by default!
`npm install --save-dev start-server-and-test`
`"e2e:ci": "start-server-and-test start http://localhost:4200 cypress:run"`

## Integrating Cucumber with Cypress
The setup is fairly well described on the [npm page](https://www.npmjs.com/package/cypress-cucumber-preprocessor#typeScript-support).
Install the following packages and make sure to add the ts types as well.
```
npm install --save-dev cypress-cucumber-preprocessor
npm install --save-dev @types/cypress-cucumber-preprocessor
```
Next, adjust `./cypress/plugins/index.js` (index.js was index.ts by default, therefore adapt all references)
```
const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;
const resolve = require('resolve');

module.exports = (on, config) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
  };

  on('file:preprocessor', cucumber(options));
};
```

### Feature and Step Files
Add the following line to the `./cypress.json` to allow for detecting cucumber feature files (GHERKIN)
``` 
 "testFiles": "**/*.{feature,features}",
```

There's a naming convention for feature files and step definitions.
- Place `<featurename>.feature` files inside `./cypress/integration`
- Place step definition files in the respective folder as follows: `./cypress/integration/<featurename>/<stepname>.ts`


In order to avoid detecting global feature files, place this config inside `./package.json`
```
  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true
  }
```
### Further examples
Example can be found on [Testersdock.com](https://testersdock.com/cypress-cucumber-bdd/), which also includes an [example github repository](https://github.com/alapanme/Cypress-Automation) and lots of other [articles](https://testersdock.com/cypress-tutorial/) and [examples](https://github.com/alapanme/Cypress-Automation) on cypress.
