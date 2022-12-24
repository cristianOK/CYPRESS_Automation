/// <reference types = "cypress"/>

describe('TS - BDD--ASSERTION....', () => {
    beforeEach("URL", ()=>{
   cy.visit("https://automationexercise.com").title().should("eq","Automation Exercise")
   cy.contains("Full-Fledged practice website for Automation Engineers")
   cy.location("host").should("eq","automationexercise.com")

     })


     it("VALIDIAR BOTONES",()=>{
     cy.get("[type='button']").eq(0).contains("Test Cases").should("be.visible")
     cy.get("[type='button']").eq(1).contains("APIs list for practice").should("be.visible")
     
    })
   
    it("TEXT FEATURE ITEMS",()=>{
    cy.get("h2[class='title text-center']").eq(0).contains("Features Items").should("be.visible")
    cy.get("img[src='/get_product_picture/1']").should("be.visible")
    cy.get("div[class='productinfo text-center']").contains("Rs. 500").should("be.visible").and("not.contain","asdsadasd")
    cy.get("[class='choose']").should("have.css","color","rgb(51, 51, 51)")

    })

    it("   MODELO BDD    ",()=>{
      cy.get("[type='button']").should($botones=>{
       expect($botones).to.have.lengthOf(6) // HAY 6 BOTONES QUIERE DECIR "LENGHTOF". el tamaño/numero de botones.
       expect($botones[0]).to.have.class("btn btn-success")
       expect($botones[1]).to.have.class("btn btn-success")
       expect($botones[2]).to.have.class("btn btn-success")
       expect($botones[3]).to.have.class("btn btn-success")
       expect($botones[4]).to.have.class("btn btn-success")
       expect($botones[5]).to.have.class("btn btn-success")
       //en este caso los 6 botones tienen la misma clase BTN BTN.SUCCESS, pero pueden tener una clase diferente cada boton,es lo mismo. 
      })

    })
     it("VALIDANDO EL TEXTO - BDD",()=>{

      cy.get("h2[class='title text-center']").should($texto=>{
       expect($texto).to.contain.text("Features Items")

      })

     })

     it("VARIABLES EN CYPRESS",()=>{
      cy.get("[href='/login']").then($BOTON_SIGN=>{
       const TextoDelBoton= $BOTON_SIGN.text();
       cy.log(TextoDelBoton)

      })
      cy.get("h2[class='title text-center']").then($textoH2=>{
        const TextoDelh2= $textoH2.text()
        cy.log(TextoDelh2)
 
       }) 

     })

     it.only("USANDO ALIAS E INVOCANDO EL TEXTO DE ESE H2",function(){
      cy.get("h2[class='title text-center']").invoke('text').as("H2_TEXTO")

     })

     it.only("IMPRIMO ESE ALIAS POR CONSOLA. ES COMO GUARDAR ESE H2 EN UNA VARIABLE",function(){
      cy.log("INVOQUE: ",this.H2_TEXTO)

     })
    
   // PARA INVOKE, ALIAS E IMPRIMIRLO TENGO Q PONER "FUNCTION() Y NO ()=>{}" 
   it.only("WRAP ES SIMILAR A ALIAS",function(){
    cy.get("[href='/login']").then($BOTON_SIGN=>{
      const TextoDelBoton= $BOTON_SIGN.text();
    cy.log(TextoDelBoton)
    cy.wrap(TextoDelBoton).as("WRAP_TEXTO_BOTON")

   })
  })
   
  it.only("IMPRIMIENDO EL WRAP",function(){
    cy.log("WRAP: ",this.WRAP_TEXTO_BOTON)

   })


})
