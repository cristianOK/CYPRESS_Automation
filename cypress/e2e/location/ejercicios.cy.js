/// <reference types="cypress" />

describe('TEST CASE 1', () => {
    beforeEach(() => {
      cy.ENTRADA()
    //  cy.viewport(375,667)
    })

   // it('Click on SIGN IN - SIGN UP button', () => {
   //   cy.REGISTER_USERS()

  //  });
    // it('Test Case 2: Login User with correct email and password', () => {
     //   cy.SIGN_IN_PARAMETROS("pablo333@gmail.com","losloros333")
    ///    cy.get(':nth-child(10) > a').contains("Logged in as pablo").should("be.visible")
    //    cy.get('.shop-menu > .nav > :nth-child(5) > a').contains("Delete Account").click()
     //   cy.get('.col-sm-9 > :nth-child(2)').contains("Your account has been permanently deleted!").should("be.visible")     

  //   });

     it('Test Case 3: Login User with incorrect email and password', () => {
       cy.TEST_CASE_3()
     });
     it('Test Case 4: Logout User', () => {
        //  cy.TEST_CASE_4()

     });

     it('Test Case 5: Register User with existing email', () => {
          cy.TEST_CASE_5()
     });

      it('Test Case 6: Contact Us Form', () => {
         cy.TEST_CASE_6()
      //  cy.get(':nth-child(6) > .form-control').click() ESTE LO OMITO. UPLOAD FILE.
      });

      it('Test Case 7: Verify Test Cases Page', () => {
       cy.TEST_CASE_7()
       
      });
      it('Test Case 8: Verify All Products and product detail page', () => {
        cy.TEST_CASE_8()
      });

      it('Test Case 9: Search Product', () => {
        cy.TEST_CASE_9()
      });      
      
      it('Test Case 10: Verify Subscription in home page', () => {
       cy.TEST_CASE_10()
      });
      
      it('Test Case 11: Verify Subscription in Cart page', () => {
        cy.TEST_CASE_11()
      });

      it('Test Case 12: Add Products in Cart', () => {
        cy.TEST_CASE_12()
      });
     
      it('Test Case 13: Verify Product quantity in Cart', () => {
         cy.TEST_CASE_13()
    });
      
      it('Test Case 14: Place Order: Register while Checkout', () => {
        cy.TEST_CASE_14()
      });

      it('Test Case 15: Place Order: Register before Checkout', () => {
        cy.TEST_CASE_15()
      });

      it('Test Case 16: Place Order: Login before Checkout', () => {
        cy.TEST_CASE_16()
      });

      it('Test Case 17: Remove Products From Cart', () => {
        cy.TEST_CASE_17()
      });

      it('Test Case 18: View Category Products', () => {
        cy.TEST_CASE_18() 
      });

      it('Test Case 19: View & Cart Brand Products', () => {
        cy.TEST_CASE_19()
      });

      it('Test Case 20: Search Products and Verify Cart After Login', () => {
        cy.TEST_CASE_20()
      });

      it('Test Case 21: Add review on product', () => {
        cy.TEST_CASE_21()
      });

      it('Test Case 22: Add to cart from Recommended items', () => {
         cy.TES_CASE_22()
      });

      it('Test Case 23: Verify address details in checkout page', () => {
       cy.TEST_CASE_23()
      });

      it('Test Case 24: Download Invoice after purchase order', () => {
        cy.TEST_CASE_24()
      

      });

      it('Test Case 25:Verify Scroll Up using- Arrow- button and Scroll Down functionality', () => {
        cy.TEST_CASE_25()
      });

      it('qweqwewe', () => {
        cy.request("https://automationexercise.com").its("status").should("eq",200)
        cy.intercept({ method: 'GET', url: 'https://automationexercise.com' })
        cy.contains("Products").click()
        cy.request("https://automationexercise.com/products").its("status").should("eq",200)
        cy.contains("Products").should("exist").should("be.visible").click()
        cy.url().should("include","automationexercise.com")
        cy.title().should("include","Automation Exercise")

        cy.get(':nth-child(4) > a').contains("Signup / Login").should("exist").click()
        cy.get('.login-form > form > [type="email"]').type("pablo222@gmail.com")
        cy.get('.login-form > form > [type="email"]').should("have.value","pablo222@gmail.com")
        cy.get('[type="password"]').type("losloros222")
        cy.get('[type="password"]').should("have.value","losloros222")
        
        cy.get('[type="text"]').type("oscar")
        cy.get('.signup-form > form > [type="email"]').type("oscar123@gmail.com")
        cy.get('.signup-form > form > .btn').click()
        cy.get('#id_gender1').check().should("be.checked")


      });

      it.only('SCREENSHOT', () => {
        cy.request("https://automationexercise.com").its("status").should("eq",200)
        cy.intercept({ method: 'GET', url: 'https://automationexercise.com' })
      //  cy.screenshot("homepage")
      //  cy.get('a > img').screenshot("logo")
        cy.title().should("include","Automation Exercise")

        

      });



});
     

