import DuvidaPageObjects from "../support/pageObjects/index.pageObjects"

describe('Automação de Teste - Central de Ajuda Getnet', () => {

  beforeEach(() => {
    cy.visit('/')
  });

it('Buscar por dúvida específica', () => {
    
  DuvidaPageObjects.acessarPaginaDeDuvidas();
  DuvidaPageObjects.pesquisarDuvidaEspecifica();
  

});

it('Validar a modal da dúvida pesquisada', () => {
    
  DuvidaPageObjects.acessarPaginaDeDuvidas();
  DuvidaPageObjects.pesquisarDuvidaEspecifica();
  DuvidaPageObjects.validarTextoDaTela();
  


});

afterEach(() => {
  cy.screenshot()
});

});