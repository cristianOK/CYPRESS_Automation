/// <reference types = "cypress"/>

describe('TS - OTROS COMANDOS DE CYPRESS', () => {
    beforeEach("URL", ()=>{
     cy.visit("https://www.whatismybrowser.com") 
     })
   
    it("APRENDIENDO NUEVOS COMANDOS",()=>{
     
     if (Cypress.browser.name==="chrome") {
        cy.get("[href='/detect/what-version-of-chrome-do-i-have']").should("contain","Chrome 107 on Windows 10")
     }else if (Cypress.browser.name==="Edge") {
        cy.get("[href='/detect/what-version-of-chrome-do-i-have']").should("contain","Edge 107 on Windows 10")
     }


    })


 })
