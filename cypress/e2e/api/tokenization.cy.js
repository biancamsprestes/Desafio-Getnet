import AuthPage from '../../pageObjects/AuthPage';
import TokenizationPage from '../../pageObjects/TokenizationPage';

describe('API Getnet Tokenization Tests', () => {
  const authPage = new AuthPage();
  const tokenizationPage = new TokenizationPage();

  before(() => {
    authPage.getAuthToken();
  });

  it('Deve realizar o script de TOKENZAÇÃO corretamente', () => {
    cy.wrap(Cypress.env('accessToken')).then((authToken) => {
      tokenizationPage.tokenizeCard(authToken, '5155901222280001', 'customer_21081826')
        .then((response) => {
          expect(response.status).to.equal(201);
          expect(response.body).to.have.property('number_token').and.not.be.empty;
          expect(response.body).to.have.property('number_token');

        });
    });
  });

  it('Deve retornar o script de TOKENZAÇÃO com erro', () => {
    cy.wrap(Cypress.env('accessToken')).then((authToken) => {
      tokenizationPage.tokenizeCardWithInvalidNumber(authToken, '155901222280001', 'customer_21081826')
        .then((response) => {
          expect(response.status).to.equal(401);
 
        });
    });
  });
});
