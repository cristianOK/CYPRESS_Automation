/// <reference types = "cypress"/>

describe('PRANTICANDO FIXTURE ORANGE....', () => {
  beforeEach("URL", ()=>{
     cy.session("INICIAR",()=>{
        cy.ENTRADA2()
        cy.logearse()
     })  

    })
  
    it("ORANGE PRACTICA", () => {     
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        cy.url().should("contain","index")
        cy.location("href").should("contain","/dashboard/index")

    })

    it("ORANGE PRACTICA2", () => {     
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        cy.contains("PIM").should("be.visible").click()
        cy.contains("PIM").click().location("href").should("contain","/viewEmployeeList")
        cy.contains(" Search ").click()
 
        
    })












  })