import AuthRequest from './models/AuthRequest';

class AuthPage {
  getAuthToken() {
    const authRequest = new AuthRequest('client_credentials', 'oob');

    return cy.request({
      method: 'POST',
      url: 'https://api-homologacao.getnet.com.br/auth/oauth/v2/token',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic Njc4MjNjNmQtNThkZS00OTRmLTk2ZDktODZhNGMyMjY4MmNiOmMyZDZhMDZmLTVmMzEtNDQ4Yi05MDc5LTdlMTcwZTg1MzZlNA=='
      },
      body: authRequest,
      form: true
    }).then((response) => {
      expect(response.status).to.equal(200);
      Cypress.env('accessToken', response.body.access_token);
    });
  }
}

export default AuthPage;
