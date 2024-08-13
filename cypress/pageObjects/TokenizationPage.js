import CardTokenizationRequest from './models/CardTokenizationRequest';

class TokenizationPage {
  tokenizeCard(authToken, cardNumber, customerId) {
    const cardRequest = new CardTokenizationRequest(cardNumber, customerId);

    return cy.request({
      method: 'POST',
      url: 'https://api-homologacao.getnet.com.br/v1/tokens/card',
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${authToken}`
      },
      body: cardRequest
    });
  }

  tokenizeCardWithInvalidNumber(authToken, cardNumber, customerId) {
    const cardRequest = new CardTokenizationRequest(cardNumber, customerId);

    return cy.request({
      method: 'POST',
      url: 'https://api-homologacao.getnet.com.br/v1/tokens/card',
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${authToken}`,
        'seller_id': 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
      },
      failOnStatusCode: false,
      body: cardRequest
    });
  }
}

export default TokenizationPage;
