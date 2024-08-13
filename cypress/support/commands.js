// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  // cypress/support/commands.js

Cypress.Commands.add('getAuthToken', () => {
  cy.request({
    method: 'POST',
    url: 'https://api-homologacao.getnet.com.br/auth/oauth/v2/token',
    scope: 'oob',
    grant_type: 'client_credentials',
    form: 'true',
    headers:{
    'content-type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic Njc4MjNjNmQtNThkZS00OTRmLTk2ZDktODZhNGMyMjY4MmNiOmMyZDZhMDZmLTVmMzEtNDQ4Yi05MDc5LTdlMTcwZTg1MzZlNA=='

    },
    body: {
      grant_type: 'client_credentials',
      scope: 'oob'
    },
  
  }).then((response) => {
    expect(response.status).to.equal(200);
    Cypress.env('accessToken', response.body.access_token);
  });
});
