/// <reference types="cypress" />
import PageObjects from "../location/PAGEOBJECT";
import PAGEOBJECTS2 from "./PAGEOBJECTS2";


describe('REPORTS - HTML-', () => {
    beforeEach(() => {     
      cy.session("LOGIN",()=>{
        cy.ENTRADA()
        cy.SIGN_1("pablo222@gmail.com","losloros222")
      })
    })

    it.skip('SCREENSHOT', () => {
        cy.request("https://automationexercise.com").its("status").should("eq",200)
        cy.intercept({ method: 'GET', url: 'https://automationexercise.com' })
        cy.title().should("include","Automation Exercise")


      });

      it.skip('PRACTICANDO', () => {
          cy.SIGN_1("pablo222@gmail.com","losloros222")
          
      });

      it.skip('PRACTICANDO 2', () => {
        cy.SIGN_2("pablo222@gmail.com","qwewwqew")
      });

      it.skip('VISILIZANDO PRODUCTOS', () => {
        PageObjects.homepage()
        PageObjects.input_productos()
        PageObjects.location_prod()
        PageObjects.search_product()
        PageObjects.submit_prod()
        PageObjects.products_1()
        PageObjects.products_16()
        PageObjects.products_21()
        PageObjects.products_24()
        PageObjects.products_37()
        PageObjects.products_41()
        PageObjects.products_43()
      });

      it.skip('SUSCRIPTION', () => {
        PageObjects.homepage1()
        PageObjects.text_suscription()
        PageObjects.email_suscription()
        PageObjects.bottom_suscription()
        PageObjects.alert_suscription()
      });

      it.only('3123QWEQWE', () => {
        cy.visit("https://automationexercise.com").title().should("eq","Automation Exercise")
        PAGEOBJECTS2.TC_visible()
     //   PAGEOBJECTS2.location()
    

      });





})