/// <reference types="cypress" />

const URL = 'http://localhost:8080/';

beforeEach(() => {
  cy.intercept('/latest?base=USD', { fixture: 'tasas', delay: 1000 }).as('traerTasas');
  cy.intercept('/latest?base=AFN', { fixture: 'tasas_AFN', delay: 1000 }).as('traerTasas_AFN');
  cy.intercept('/2010-02-20?base=USD').as('traerTasas_2010-02-20');
  cy.visit(URL);
});

describe('Casa de cambios', () => {
  it('al visitar la pagina trae las tasas de cambio', () => {
    cy.wait(['@traerTasas']);
  });

  context('elementos de la pagina', () => {
    it('muestra el titulo correctamente', () => {
      cy.getByData('titulo').contains('Casa de cambios');
    });

    it('muestra el subtitulo correctamente', () => {
      cy.getByData('subtitulo').contains('r/argentina programa');
    });

    it('muestra el input para ingresar la fecha', () => {
      cy.getByData('input-fecha').should('be.visible');
    });

    it('muestra el icono de cargando al visitar la pagina y luego lo enconde', () => {
      cy.getByData('cargando-monedas').should('be.visible');
      cy.getByData('cargando-monedas').should('not.be.visible');
    });

    it('muestra las monedas correctamente', () => {
      cy.fixture('tasas').then((respuesta) => {
        const monedas = Object.keys(respuesta.rates);
        cy.getByData('monedas')
          .children()
          .each(($moneda, index) => {
            cy.wrap($moneda).contains(monedas[index]);
          });
      });
    });
  });

  context('interacciones del usuario', () => {
    it('cuando se clickea una moneda trae las tasas de cambio de esa moneda', () => {
      cy.getByData('monedas').children().contains('AFN').click();
      cy.wait(['@traerTasas_AFN']);
    });

    it('cuando se clickea una moneda se muestra el icono de cargando y luego lo enconde', () => {
      cy.getByData('monedas').children().contains('AFN').click();
      cy.getByData('cargando-tasas').should('be.visible');
      cy.getByData('cargando-tasas').should('not.be.visible');
    });

    it('cuando se cambia la fecha trae las tasas de cambio con la fecha correcta', () => {
      cy.wait(['@traerTasas']);
      cy.getByData('input-fecha').type('2010-02-20').trigger('change');
      cy.wait(['@traerTasas_2010-02-20']);
    });

    it('cuando se cambia la moneda muestra las tasas de cambio correctamente', () => {
      cy.getByData('monedas').children().contains('AFN').click();
      cy.fixture('tasas_AFN').then((respuesta) => {
        const monedas = Object.keys(respuesta.rates);
        cy.getByData('tasas')
          .children()
          .each(($fila, i) => {
            cy.wrap($fila).contains(monedas[i]);
            cy.wrap($fila).contains(respuesta.rates[monedas[i]]);
          });
      });
    });
  });
});
