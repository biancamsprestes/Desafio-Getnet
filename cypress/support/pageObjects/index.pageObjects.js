

class Duvidas{

acessarPaginaDeDuvidas(){
        
        cy.get('#gnt-burger').click();
        cy.get('#menu-header-login > :nth-child(1) > .gnt-nav-button').contains('Sou cliente').click();
        cy.get('#menu-ajuda-sou-cliente-central-ajuda').contains('Central de ajuda').click();

    }
pesquisarDuvidaEspecifica(){

        cy.get('#faq-search-input').type('Boleto');
        cy.contains('Eu concluí a negociação, de que forma receberei meu boleto?')

    }

validarTextoDaTela(){

    cy.get('#faq-search-input').type('Boleto');
    cy.contains('Eu concluí a negociação, de que forma receberei meu boleto?').click();
    
    cy.get('.is-modal-open > .o-modal__content > .o-modal__title')
      .contains('Eu concluí a negociação, de que forma receberei meu boleto?')

    cy.get('.is-modal-open > .o-modal__content > .o-modal__text > .o-modal__text-content > :nth-child(1)')
      .contains('O boleto será enviado para seu endereço de e-mail registrado em Cadastro, ou aquele digitado no momento da negociação.')

    cy.get('.is-modal-open > .o-modal__content > .o-modal__text > .o-modal__text-content > :nth-child(2)')
      .contains('Portal do Cliente')

      cy.get('.is-modal-open > .o-modal__content > .o-modal__text > .o-modal__text-content > :nth-child(3)')
        .contains('1. Acesse: www.santandergetnet.com.br 2. Preencha seu login e senha para acessar a área restrita do Portal 3. No menu à esquerda, clique em Solução de Dívidas; 4. Na tela Títulos, selecione Abertos; 5. Na tela Negociação, você poderá simular a negociação e enviar uma contraproposta ou então concluir.')

      cy.get('.is-modal-open > .o-modal__content > .o-modal__text > .o-modal__text-content > :nth-child(4)')
        .contains('Portal Recargas')

        cy.get('.is-modal-open > .o-modal__content > .o-modal__text > .o-modal__text-content > :nth-child(5)')
        .contains('1. Acesse: http://portal.getnet-tecnologia.com.br; 2. Preencha seu login e senha para acessar a área restrita do Portal; 3. No menu à esquerda, clique em Menu Telefonia; 4. Clique em Financeiro e na sequência, em Soluções de Dívidas; 5. Na tela Títulos, selecione Abertos; 6. Na tela Negociação, você poderá simular a negociação e enviar uma contraproposta ou então concluir.')
    }
    
}

export default new Duvidas();