/// <reference types = "cypress"/>

import PageObjects from "../location/PAGEOBJECT";

describe('TS - INTERCEPTER....', () => {
    beforeEach("URL", ()=>{
   cy.visit("https://automationexercise.com").title().should("eq","Automation Exercise")
   cy.contains("Full-Fledged practice website for Automation Engineers")
   cy.location("host").should("eq","automationexercise.com")
     })

     it("TC N°1 - SIGN IN -- PAGE OBJET MODEL",()=>{
      PageObjects.SIGN_IN()
      PageObjects.typeUser("pablo222@gmail.com")
      PageObjects.typePASSWORD("losloros222")
      PageObjects.typeCLICK();
   
     })
     
     it("REQUEST - TEST",()=>{
       cy.request("https://automationexercise.com/products").its("status").should("eq",200)     
     })

     it("TESTEANDO OTROS ELEMENTOS DENTRO DEL HEADERS",()=>{
      cy.request("https://automationexercise.com/products").its("headers").its("content-type").should("include","text/html").should("include","charset=utf-8")

     })
     
     it.only("PONIENDO ALIAS A LA PAGE,ASI PUEDO ACCEDER CON ESE NOMBRE Q LE PUSE Y DE PASO TESTEO OTROS COMPONENTES",()=>{
      cy.request("GET","https://automationexercise.com/products").as("PAGE_PRODUCTS")
      cy.get("@PAGE_PRODUCTS").should(Response=>{
        expect(Response).to.have.property("headers")
        expect(Response).to.have.property("status")
        expect(Response).to.have.property("duration")
     })

    })
    





    })     