/// <reference types = "cypress"/>

describe('TS - LOCATION....', () => {
     beforeEach("URL", ()=>{
    cy.visit("https://automationexercise.com").title().should("eq","Automation Exercise")
  //  cy.SIGN__IN("pablo222@gmail.com","losloros222");
   // cy.contains("Full-Fledged practice website for Automation Engineers")
  //  cy.location("host").should("eq","automationexercise.com")
   // cy.LOGOUT();
      })
    it("TC N°1 -- URL USE HTTPS",()=>{
       cy.location("protocol").should("contains","https")
         
    })

  //  it("test prueba",()=>{
   //   cy.log("test prueba")
        
 //  })
    it("TC N°2-- COMPROBAR NUESTRO HOSTNAME",()=>{
        cy.location("host").should("eq","automationexercise.com")
          
     })
     it("TC N°3-- COMPROBAR EL/LOS PATH",()=>{
        cy.contains("Products").click().location("href").should("contain","/products")       
          
     })
     
     it("TC N°4-- LOCALIZADORES CSS - SIGN IN",()=>{
      cy.contains("Signup / Login").should("be.visible").click()
      cy.get("[data-qa='login-email']").type("pablo222@gmail.com")
      cy.get("[data-qa='login-password']").type("losloros222")
      cy.get("[data-qa='login-button']").click()     
        
   })

   it("TC N°4-- ACA LO MISMO DE ARRIBA, SOLO LE AGREGUE FILTER....",()=>{
     cy.contains("Signup / Login").should("be.visible").click()
     cy.get("[data-qa='login-email']").filter("[type='email']").type("pablo222")
     cy.get("[data-qa='login-password']").filter("[type='password']").type("pablo999")
     
   })
   
   it("TC N°5-- USANDO FIND",()=>{
      cy.contains("Signup / Login").should("be.visible").click()    
      cy.get("form").find("input").eq(1).type("pablo222")    
      cy.get("form").find("input").eq(2).type("pablo333")      
   
   })

   it("TC N°6-- USANDO METHOD PARENT (LA CLASE PADRE)",()=>{
      cy.contains("Signup / Login").should("be.visible").click()
      cy.get("form").parent().should("have.class","login-form")
        
      // ESTO QUIERE DECIR QUE FORM PERTENECE A UN DIV Y SU CLASE PADRE DE ESE DIV ES "LOGIN-FORM". MUY SIMPLE. PUEDE SER CON CUALQUIER ELEMENTO HTML.
   })

   it("TC N°7 -- UN PUNTO(.) CUANDO AY UNA SOLA CLASE.",()=>{
      cy.contains("Signup / Login").should("be.visible").click()
      cy.get(".pull-left").should("contain.text","Copyright © 2021 All rights reserved")
         
   })
   
   it("TC N°8-- VALIDATOR ERROR MESSAGE",()=>{
      cy.contains("Signup / Login").should("be.visible").click()
      cy.get("[data-qa='login-email']").type("pablo222@gmail.com")
      cy.get("[data-qa='login-password']").type("asdsadas") // PUSE MAL LA CONTRASEÑA ASI SALTA EL MESSAGE ERROR. PARA COMPROBAR Q FUNCIONA CORRECTAMENTE.
      cy.get("[data-qa='login-button']").click()
      cy.get('.login-form > form > p').should("contain.text","Your email or password is incorrect!")
       
   })
  


})