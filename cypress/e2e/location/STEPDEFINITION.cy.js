
/// <reference types = "cypress"/>

context("Feature: Validar el correcto logeo de los usuarios ya registrados.",()=>{

  beforeEach("que el usuario de encuentra en la home pague del sitio.",()=>{
    cy.ENTRADA()   
  })

describe("US 1 | TS 1 | TC 1 | CHECK EL CORRECTO LOGEO DEL USUARIO ya registrado.",()=>{

     it("el usuario escribe su {string} y su {string} correctamente.",()=>{
        cy.fixture("AutomaFixture").then((a11)=>{
        cy.contains("Signup / Login").should("be.visible").click()
        cy.location("href").should("contain","/login")
        cy.get(a11.username.textBoxInputEmail).type(a11.username.datos.valido)
        cy.get(a11.password.textBoxInputPassword).type(a11.password.datos.valido)
        cy.get("[data-qa='login-button']").click() // "hace click en el boton SIGN IN."
        cy.contains(" Logout").should("be.visible") // "el usuario debe poder iniciar session correctamente."
     })
   })    
})

describe("US 1 | TS 2 | TC 2 | CHECK que NO SE PUEDA INICIAR SESSION CON DATOS INCORRECTOS.",()=>{

    it("el usuario escribe un '<username>' y un '<password>' invalidos",()=>{
       cy.fixture("AutomaFixture").then((a12)=>{
       cy.contains("Signup / Login").should("be.visible").click()
       cy.location("href").should("contain","/login")
       cy.get(a12.username.textBoxInputEmail).type(a12.username.datos.valido)
       cy.get(a12.password.textBoxInputPassword).type(a12.password.datos.invalido)
       cy.get("[data-qa='login-button']").click() //"hace click en el boton SIGN IN.-"
       cy.contains("Your email or password is incorrect!") // "aparece un mensaje de error"
    })
    
   })
})

})