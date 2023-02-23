Cypress.Commands.add('getByData', (selector) => {
  cy.get(`[data-test=${selector}]`);
});
