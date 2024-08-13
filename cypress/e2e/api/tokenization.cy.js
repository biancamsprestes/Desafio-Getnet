
describe('API Getnet Tokenization Tests', () => {
 
 

 let authToken;

 before(() => {
   cy.getAuthToken().then(() => {
     authToken = Cypress.env('accessToken'); 
   });
 });

  it('Deve realizar o script de TOKENZAÇÃO corretamente', () => {
    
    cy.request({
      method: 'POST',
      url: 'https://api-homologacao.getnet.com.br/v1/tokens/card',
      headers: {
         'content-type': 'application/json; charset=utf-8',
         'Authorization': `Bearer ${authToken}`,
         'seller_id': 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
      },
  
      body: {
          'card_number': '5155901222280001',
          'customer_id': 'customer_21081826'
      }
    }).then((response) => {
     
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('number_token');
      expect(response.body).to.have.property('customer_id').eq('customer_21081826');
      cy.fixture('tokenization-contract.json').then((schema) => {
        expect(response.body).to.matchSchema(schema);

      });

    });
  });

  it('Deve retornar o script de TOKENZAÇÃO com erro', () => {
   
   
    cy.request({
      method: 'POST',
      url: 'https://api-homologacao.getnet.com.br/v1/tokens/card',
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${authToken}`,
        'seller_id': 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
     },
      failOnStatusCode: false, // Para capturar status code diferente de 200
      body: {
        'card_number': '5155901222280001222', //222
        'customer_id': 'customer_21081826'
    }
    }).then((response) => {
      expect(response.status).to.equal(401);
      expect(response.body).to.have.property('number_token');
      expect(response.body).to.have.property('customer_id').eq('customer_21081826');
      expect(response.body).to.have.property('message').contains('Invalid card number');
    });
  });
});
