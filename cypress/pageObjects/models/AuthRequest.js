class AuthRequest {
    constructor(grantType, scope) {
      this.grant_type = grantType;
      this.scope = scope;
    }
  }
  
  export default AuthRequest;
  