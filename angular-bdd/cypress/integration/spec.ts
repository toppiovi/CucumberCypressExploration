describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Visits the initial project page', () => {
    cy.contains('Welcome');
  });

  it('Counter is 0 by default', () => {
    cy.contains('counter').contains(0);
  });

  it('Clicking increment sets counter to 1', () => {
    cy.get('[data-cy="increment"]').click();
    cy.contains('counter').contains(1);
  });

  it('Clicking descrement sets counter to -1', () => {
    cy.get('[data-cy="decrement"]').click();
    cy.contains('counter').contains(-1);
  });
});
