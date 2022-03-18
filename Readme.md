https://codeburst.io/bdd-with-angular-and-cucumberjs-8cb4c33c2dff

https://angular.de/artikel/angular-cypress-typescript-e2e-testing/

```
ng new angular-bdd
cd angular-bdd
ng build
```

## Protractor
- Selenium WebDriver
- not reliable, uses page objects
- uses Web Connection to interact with browser
  
## Cypress
- Stable
- Cypress test runner Runs in browser -> faster, more reliable
- Debugging
- Screenshots / Videos
- Auto waiting
- Good error messages / good docs -> Good dev ex
- set application state without going through ui

### Setup
`ng e2e` will complain that e2e is not setup.
Select `ng add @cypress/schematic` and follow the CLI questions.
rerun `ng e2e` and see how cypress (electorn app) will execute all your specs.
Cypress has added a default spec for starters. Those tests will fail of course.
Check the `cypress.json` config for the tests directory etc.

### Select Elements
Selecting elements by id/text is brittle and will break with ui/css changes.
Use data-cy attribue instead: https://docs.cypress.io/guides/references/best-practices#Selecting-Elements
Video for best practices: https://www.youtube.com/watch?v=5XQOK0v_YRE