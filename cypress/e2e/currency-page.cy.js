describe('Automatizando  ', () => {
  beforeEach(() => {
    Cypress.config('defaultCommandTimeout', 10000); // 3 segundos por comando (em vez de 4ms padrão)
    cy.viewport(1200, 720);
    cy.visit('/');
    // cy.wait('@resource').its('response.statusCode').should('eq', 304); //esperando a requisição ser concluída
  });
  it('01-Abrir os inputs para selecionar os elementos', () => {
    //Fazendo asserção para verificar a primeira label
    cy.get('label')
      .eq(0)
      .should('contain.text', 'Converter de')
      .children('select') //selecionando o select dentro da label
      .debug()
      .select('R$ Real Brasileiro');
    //Fazendo asserção para verificar a segunda label
    cy.get('label')
      .eq(1)
      .should('contain.text', 'Converter para')
      .children('select') //selecionando o select dentro da label
      .debug()
      .select('US$ Dólar Americano');
  });
  //Verificando o input de valor
  it('02-Verificar input e valor convertido de R$ para US$', () => {
    cy.get('input')
      .should('have.attr', 'placeholder', 'R$ 10.000,00') //verificando se o input está visível
      .type('100'); //digitando um valor no input
    cy.get('button').should('have.attr', 'id', 'converter-Button').click(); //verificando se o botão de conversão está visível
  });

  it.only('03-Converter de Euro para Reais', () => {
    //Fazendo asserção para verificar a primeira label
    cy.get('label')
      .eq(0)
      .should('contain.text', 'Converter de')
      .children('select') //selecionando o select dentro da label
      .select('R$ Real Brasileiro');
    //Fazendo asserção para verificar a segunda label

    cy.get('label')
      .eq(1)
      .should('contain.text', 'Converter para')
      .children('select');

    cy.get('label')
      .should('be.visible')
      .contains('Converter para')
      .children('select')
      .should('contain.text', '€ Euro')
      .select('€ Euro'); //selecionando o Euro
    cy.get('input')
      .should('have.attr', 'placeholder', 'R$ 10.000,00') //verificando se o input está visível
      .type('100'); //digitando um valor no input
    cy.get('button').should('have.attr', 'id', 'converter-Button').click(); //verificando se o botão de
  });

  it.only('04-Converter de Bitcoin para Reais', () => {
    //Fazendo asserção para verificar a primeira label
    cy.get('label')
      .eq(0)
      .should('contain.text', 'Converter de')
      .children('select') //selecionando o select dentro da label
      .select('R$ Real Brasileiro');
    //Fazendo asserção para verificar a segunda label
    cy.get('label')
      .eq(1)
      .should('contain.text', 'Converter para')
      .children('select');

    cy.get('label')
      .should('be.visible')
      .contains('Converter para')
      .children('select')
      .should('contain.text', 'Bitcoin')
      .select('Bitcoin'); //selecionando o Euro

    cy.get('input')
      .should('have.attr', 'placeholder', 'R$ 10.000,00') //verificando se o input está visível
      .type('500'); //digitando um valor no input

    cy.get('button').should('have.attr', 'id', 'converter-Button').click(); //verificando se o botão de conversão está visível
  });
});
