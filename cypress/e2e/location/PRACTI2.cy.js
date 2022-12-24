/// <reference types="cypress" />

describe('SEGUIMIENTO DE PRACTICA', () => {
    beforeEach(() => {
      cy.ENTRADA()
    })

    it('VALIDANDO TIPOS DE SCRIPTS', () => {
        cy.location('pathname').should('not.include', '/products')
        cy.location('pathname').should('not.include', '/login')
        cy.location('pathname').should('not.include', '/view_cart')
        cy.location('pathname').should('not.include', '/api_list')
    });

    it('HISTORIAL DE NAVEGACION, IR HACIA ADELANTE O ATRAS', () => {
    cy.get('.shop-menu > .nav > :nth-child(2) > a').contains("Products").click() //1- ESTOY EN /PRODUCTS.
    cy.go("back") //2.QUIERO IR HACIA ATRAS.
    cy.location('pathname').should('not.include', '/products') //3. ENTONCES YA NO ESTOY EN /PRODUCTS.
    cy.go("forward") //AHORA VOY HACIA ADELANTE
    cy.location('pathname').should('include', '/products') //ENTONCES VUELVO A ESTAR EN PRODUCTS.
    });

    it('STATUS', () => {
        cy.request("https://automationexercise.com").its("status").should("eq",200)     
    });

})