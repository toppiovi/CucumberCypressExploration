import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('I visit the page', () => {
  cy.visit('/');
});

When('I click on increment {int} time', (times: number) => {
  for (let i = 0; i < times; i++) cy.get('[data-cy="increment"]').click();
});

When('I click on decrement {int} time', (times: number) => {
  for (let i = 0; i < times; i++) cy.get('[data-cy="decrement"]').click();
});

Then('The counter should show {int}', (count: number) => {
  cy.contains('counter').contains(count);
});
