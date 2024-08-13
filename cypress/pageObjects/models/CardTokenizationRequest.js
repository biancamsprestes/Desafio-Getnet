class CardTokenizationRequest {
    constructor(cardNumber, customerId) {
      this.card_number = cardNumber;
      this.customer_id = customerId;
    }
  }
  
  export default CardTokenizationRequest;