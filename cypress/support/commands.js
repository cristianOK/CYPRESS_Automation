// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("NEW_USER",()=>{
       
    cy.contains("Signup / Login").click() 
    cy.contains("New User Signup!")
    cy.get("[placeholder='Name']").type("pablo") 
    cy.get('.signup-form > form > [type="email"]').type("pablo111@gmail.com")
    cy.get('.signup-form > form > .btn').click()            
    cy.contains("Enter Account Information")
    cy.get('#id_gender1').check()
    cy.get('#password').type("losloros111")
    cy.get('#days').select("2")
    cy.get('#months').select("3")
    cy.get('#years').select("2000")
    cy.get('#first_name').type("pablo")
    cy.get('#last_name').type("workings")
    cy.get('#address1').type("4600")
    cy.get('#country').select("United States")
    cy.get('#state').type("CALIFORNIA")
    cy.get('#city').type("BUENOS DIAS")
    cy.get('#zipcode').type("789514")
    cy.get('#mobile_number').type("+99887745441")
    cy.get('.login-form > form > .btn').click()
    cy.get('.col-sm-9 > :nth-child(2)').contains("Congratulations! Your new account has been successfully created!")
    cy.get('.pull-right > .btn').click()
    cy.contains("Logout")
    cy.contains("Logged in as")
    cy.contains("Logout").click()
   }) 


Cypress.Commands.add("SIGN__IN",(username,password)=>{
    cy.contains("Signup / Login").should("be.visible").click()
    cy.location("href").should("contain","/login")
    cy.get("[data-qa='login-email']").type(username)
    cy.get("[data-qa='login-password']").type(password)
    cy.get("[data-qa='login-button']").click()

})

Cypress.Commands.add("LOGOUT",()=>{
    cy.contains(" Logout").click()

})

Cypress.Commands.add("ENTRADA",()=>{
    cy.visit("https://automationexercise.com").title().should("eq","Automation Exercise")
    cy.location("protocol").should("contains","https")
    cy.location("host").should("eq","automationexercise.com")
    cy.intercept({ method: 'GET', url: 'https://automationexercise.com' })

})

Cypress.Commands.add("SIGN_IN_EFECTIVO",()=>{
    cy.fixture("AutomaFixture").then((a1)=>{
        cy.contains(a1.BOTON_Contains).should("be.visible").click()
        cy.get(a1.username.textBoxInputEmail).type(a1.username.datos.valido)
        cy.get(a1.password.textBoxInputPassword).type(a1.password.datos.valido)
        cy.get(a1.botonLOGIN).click()

})

})

Cypress.Commands.add("SIGN_IN_PARAMETROS",(email,contrasena)=>{
    cy.fixture("AutomaFixture").then((a2)=>{
        cy.contains(a2.BOTON_Contains).should("be.visible").click()
        cy.get(a2.username.textBoxInputEmail).type(email)
        cy.get(a2.password.textBoxInputPassword).type(contrasena)
        cy.get(a2.botonLOGIN).click()

})

})

Cypress.Commands.add("ENTRADA2",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.location("protocol").should("contains","https")
    cy.location("host").should("eq","opensource-demo.orangehrmlive.com")
    cy.contains("Login").should("be.visible")
})

Cypress.Commands.add("logearse",()=>{
    cy.fixture("AutomaFixture").then((a3)=>{
        cy.get(a3.Username_orange).type(a3.user_orange)
        cy.get(a3.Username_Password).type(a3.user_password)
        cy.get(a3.Boton_Orange_Submit).click()
  })

})


//-----------------------"AUTOMATIZACION PAGE"----------------------------
Cypress.Commands.add("SingUP_AUTOMATIZACION",()=>{
  cy.fixture("formulario").then((a4)=>{
  cy.contains(a4.BOTON_Contains).should("be.visible").click()
  cy.get(a4.NAME__).type("dani")
  cy.get(a4.EMAIL__).type("daniok@gmail.com")
  cy.get(a4.BOTONSIGNUP).click()
  cy.get(a4.checkBoxGENERO).check()
  cy.get(a4.PASSWORDSIGNUP).type("losloros444")
  cy.get(a4.DATEBIRGHT).select("4")
  cy.get(a4.DATEMONTH).select("5")
  cy.get(a4.DATEYEAR).select("2000")
  cy.get(a4.FIRST_NAME).type("daniela")
  cy.get(a4.LAST_NAME).type("fernandez")
  cy.get(a4.ADRESS).type("danioficial@gmail.com")
  cy.get(a4.COUNTRY).select("United States")
  cy.get(a4.STATE).type("CALIFORNIA")
  cy.get(a4.CITY).type("BUENOS DIAS")
  cy.get(a4.CP).type("4654")
  cy.get(a4.MOBILE).type("+64654564984")
  cy.get(a4.BOTON_CREAR).click()
  cy.contains("Congratulations! Your new account has been successfully created!").should("be.visible")
  cy.get('.pull-right > .btn').click()

  })

})

// CASOS DE PRUEBA DE AUTOMATION EXCERCICIOS //

Cypress.Commands.add("REGISTER_USERS",()=>{
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.signup-form > h2').contains("New User Signup!").should("be.visible")
    cy.get("[data-qa='signup-name']").type("pato")
    cy.get("[data-qa='signup-email']").type("pato111@gmail.com")
    cy.get("[data-qa='signup-button']").click() 
    cy.contains('Enter Account Information').should("be.visible")
    cy.get('#id_gender1').check()
    cy.get("[data-qa='name']").should("not.contain.value")
    cy.get("[data-qa='email']").should("not.contain.value")
    cy.get("[data-qa='password']").type("patricio123")
    cy.get('#days').select("2")
    cy.get('#months').select("3")
    cy.get('#years').select("2000")
    cy.get("[id='newsletter']").check()
    cy.get('#optin').check()
    cy.get('#first_name').type("patricio")
    cy.get('#last_name').type("OLGA")
    cy.get('#address1').type("patoADRESS@gmail.com")
    cy.get('#address2').type("patoADRESS2@gmail.com")
    cy.get('#country').select("United States")
    cy.get('#state').type("CALIFORNIA")
    cy.get('#city').type("BUENOS DIAS")
    cy.get('#zipcode').type("7895124")
    cy.get('#mobile_number').type("+998877454441")
    cy.get('.login-form > form > .btn').click()
    cy.get('.col-sm-9 > :nth-child(2)').contains("Congratulations! Your new account has been successfully created!").should("be.visible")
    cy.get('.pull-right > .btn').click()
    cy.get(':nth-child(10) > a').contains("Logged in as pato").should("be.visible")
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    cy.get('.col-sm-9 > :nth-child(2)').contains("Your account has been permanently deleted!").should("be.visible")
    cy.get('.pull-right > .btn').click()
     
})

Cypress.Commands.add("REGISTER_TC_14",()=>{
    cy.get('.signup-form > h2').contains("New User Signup!").should("be.visible")
    cy.get("[data-qa='signup-name']").type("pato")
    cy.get("[data-qa='signup-email']").type("pato111@gmail.com")
    cy.get("[data-qa='signup-button']").click() 
    cy.contains('Enter Account Information').should("be.visible")
    cy.get('#id_gender1').check()
    cy.get("[data-qa='name']").should("not.contain.value")
    cy.get("[data-qa='email']").should("not.contain.value")
    cy.get("[data-qa='password']").type("patricio123")
    cy.get('#days').select("2")
    cy.get('#months').select("3")
    cy.get('#years').select("2000")
    cy.get("[id='newsletter']").check()
    cy.get('#optin').check()
    cy.get('#first_name').type("patricio")
    cy.get('#last_name').type("OLGA")
    cy.get('#address1').type("patoADRESS@gmail.com")
    cy.get('#address2').type("patoADRESS2@gmail.com")
    cy.get('#country').select("United States")
    cy.get('#state').type("CALIFORNIA")
    cy.get('#city').type("BUENOS DIAS")
    cy.get('#zipcode').type("7895124")
    cy.get('#mobile_number').type("+998877454441")
    cy.get('.login-form > form > .btn').click()
    cy.get('.col-sm-9 > :nth-child(2)').contains("Congratulations! Your new account has been successfully created!").should("be.visible")
    cy.get('.pull-right > .btn').click()
    cy.get(':nth-child(10) > a').contains("Logged in as pato").should("be.visible")
  
})

Cypress.Commands.add("TEST_CASE_2",()=>{


})

Cypress.Commands.add("TEST_CASE_3",()=>{
        cy.get('.shop-menu > .nav > :nth-child(4) > a').contains(" Signup / Login").click()
        cy.get('.login-form > h2').contains("Login to your account").should("be.visible")
        cy.get('.login-form > form > [type="email"]').type("pablo222@gmail.com")
        cy.get('[type="password"]').type("qweqwewq")
        cy.get('.login-form > form > .btn').click()
        cy.get('.login-form > form > p').contains("Your email or password is incorrect!").should("be.visible") 

})

Cypress.Commands.add("TEST_CASE_4",()=>{
        cy.get('.shop-menu > .nav > :nth-child(4) > a').contains(" Signup / Login").click()
        cy.get('.login-form > h2').contains("Login to your account").should("be.visible")
        cy.get('.login-form > form > [type="email"]').type("pablo222@gmail.com")
        cy.get('[type="password"]').type("losloros222")
        cy.get('.login-form > form > .btn').click()
        cy.get(':nth-child(10) > a').contains("Logged in as pablo").should("be.visible")
        cy.get('.shop-menu > .nav > :nth-child(4) > a').contains("Logout").should("be.visible").click()
        cy.location('pathname').should('include', '/login')
    
})


Cypress.Commands.add("TEST_CASE_5",()=>{
        cy.get('.shop-menu > .nav > :nth-child(4) > a').contains(" Signup / Login").click()
        cy.get('.signup-form > h2').contains("New User Signup!").should("be.visible")
        cy.get('[type="text"]').type("pablo")
        cy.get('.signup-form > form > [type="email"]').type("pablo222@gmail.com")
        cy.get('.signup-form > form > .btn').contains("Signup").click()
        cy.get('.signup-form > form > p').contains("Email Address already exist!").should("be.visible")
    
})

Cypress.Commands.add("TEST_CASE_6",()=>{
    cy.get('.shop-menu > .nav > :nth-child(8) > a').contains("Contact us").should("be.visible").click()
    cy.get('div.contact-form > .title').title("GET IN TOUCH")
    cy.get(':nth-child(2) > .form-control').type("pablo")
    cy.get(':nth-child(3) > .form-control').type("pablo222@gmail.com")
    cy.get(':nth-child(4) > .form-control').type("PRACTICANDO.....")
    cy.get('#message').type("ESTOY PRACTICANDO VAMOS COME ONNNNNN")
    cy.get(':nth-child(7) > .btn').click()
    cy.get('.status').contains("Success! Your details have been submitted successfully.").should("be.visible")
    cy.get('span').contains(" Home").click()
    cy.location("host").should("eq","automationexercise.com")
  
})

Cypress.Commands.add("TEST_CASE_7",()=>{
    cy.get('.shop-menu > .nav > :nth-child(5) > a').contains("Test Cases").should("be.visible").click()
    cy.location('pathname').should('include', '/test_cases')  
})

Cypress.Commands.add("TEST_CASE_8",()=>{
    cy.get('.nav > :nth-child(2) > a').contains("Products").click()
    cy.location('pathname').should('include', '/products')
    cy.get('.title').title("All Products")
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
    cy.location('pathname').should('include', '/product_details/1')
    cy.get('.product-information > h2').contains("Blue Top").should("be.visible")
    cy.get('.product-information > :nth-child(3)').contains("Category: Women > Tops").should("be.visible")
    cy.get(':nth-child(5) > span').contains("Rs. 500").should("be.visible")
    cy.get('.product-information > :nth-child(6)').contains("Availability: In Stock").should("be.visible")
    cy.get('.product-information > :nth-child(7)').contains("Condition: New").should("be.visible")
    cy.get('.product-information > :nth-child(8)').contains("Brand: Polo").should("be.visible")
 
})

Cypress.Commands.add("TEST_CASE_9",()=>{
    cy.get("[href='/products']").should("be.visible").click()
    cy.location('pathname').should('include', '/products')
    cy.get('#search_product').type("blue")
    cy.get('#submit_search').click()
    cy.get("[src='/get_product_picture/1']").should("be.visible")
    cy.get("[src='/get_product_picture/16']").should("be.visible")
    cy.get("[src='/get_product_picture/21']").should("be.visible")
    cy.get("[src='/get_product_picture/24']").should("be.visible")
    cy.get("[src='/get_product_picture/37']").should("be.visible")
    cy.get("[src='/get_product_picture/41']").should("be.visible")
    cy.get("[src='/get_product_picture/43']").should("be.visible")   
})

Cypress.Commands.add("TEST_CASE_10",()=>{
    cy.get("h2").contains("Subscription").should("be.visible")
    cy.get("[id='susbscribe_email']").type("pablo222@gmail.com")
    cy.get("[id='subscribe']").click()
    cy.get('.alert-success').contains("You have been successfully subscribed!").should("be.visible")

})

Cypress.Commands.add("TEST_CASE_11",()=>{
    cy.get('.shop-menu > .nav > :nth-child(3) > a').contains("Cart").should("be.visible").click()
    cy.location('pathname').should('include', '/view_cart')
    cy.get("h2").contains("Subscription").should("be.visible")
    cy.get("[id='susbscribe_email']").type("pablo222@gmail.com")
    cy.get("[id='subscribe']").click()
    cy.get('.alert-success').contains("You have been successfully subscribed!").should("be.visible")   
})


Cypress.Commands.add("TEST_CASE_12",()=>{
    cy.get("[href='/products']").should("be.visible").click()
    cy.location('pathname').should('include', '/products')
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get("[class='btn btn-success close-modal btn-block']").contains("Continue Shopping").click()
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get("[href='/view_cart']").contains("View Cart").click()
    cy.get('#product-1 > .cart_description > h4 > a').contains("Blue Top").should("be.visible")
    cy.get('#product-1 > .cart_price > p').contains("Rs. 500").should("be.visible")
    cy.get('#product-1 > .cart_quantity > .disabled').contains("1").should("be.visible")
    cy.get('#product-1 > .cart_total > .cart_total_price').contains("Rs. 500").should("be.visible")
    // 2° PRODUCTO //

    cy.get('#product-2 > .cart_description > h4 > a').contains("Men Tshirt").should("be.visible")
    cy.get('#product-2 > .cart_price > p').contains("Rs. 400").should("be.visible")
    cy.get('#product-2 > .cart_quantity > .disabled').contains("1").should("be.visible")
    cy.get('#product-2 > .cart_total > .cart_total_price').contains("Rs. 400").should("be.visible")
 
})



Cypress.Commands.add("TEST_CASE_13",()=>{
    cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click()
    cy.location('pathname').should('include', 'product_details/3')
    cy.get('#quantity').type("{uparrow}").type("{uparrow}").type("{uparrow}").type("{uparrow}")
    cy.get(':nth-child(5) > .btn').contains("Add to cart").should("be.visible").click()
    cy.get('u').contains("View Cart").click()
    cy.location('pathname').should('include', '/view_cart')
    cy.get('.disabled').contains("5").should("be.visible")
  
})


Cypress.Commands.add("TEST_CASE_14",()=>{
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get("[class='btn btn-success close-modal btn-block']").contains("Continue Shopping").click()
    cy.get(':nth-child(3) > a').contains("Cart").click()
    cy.location('pathname').should('include', '/view_cart')
    cy.get('.col-sm-6 > .btn').contains("Proceed To Checkout").should("be.visible").click()
    cy.get('.modal-body > :nth-child(2) > a > u').contains("Register / Login").click()
    cy.REGISTER_TC_14()
    cy.get(':nth-child(3) > a').contains("Cart").click()
    cy.get('.col-sm-6 > .btn').contains("Proceed To Checkout").should("be.visible").click()
    cy.get('#address_delivery > .address_firstname').contains("Mr. patricio OLGA")
    cy.get('#address_delivery > :nth-child(4)').contains("patoADRESS@gmail.com")
    cy.get('#address_delivery > :nth-child(5)').contains("patoADRESS2@gmail.com")
    cy.get('#address_delivery > .address_country_name').contains("United States")
    cy.get('#address_delivery > .address_phone').contains("+998877454441")


    cy.get(':nth-child(4) > .heading').contains("Review Your Order").should("be.visible")

    cy.get('#product-1 > .cart_description > h4 > a').contains("Blue Top").should("be.visible")
    cy.get('#product-1 > .cart_price > p').contains("Rs. 500").should("be.visible")
    cy.get('#product-1 > .cart_quantity > .disabled').contains("1").should("be.visible")
    cy.get('#product-1 > .cart_total > .cart_total_price').contains("Rs. 500").should("be.visible")
    cy.get('.form-control').type("BUENISIMO EL PRODUCTO")
    cy.get(':nth-child(7) > .btn').contains("Place Order").click()
    cy.get(':nth-child(2) > .col-sm-12 > .form-control').type("VISA")
    cy.get(':nth-child(3) > .col-sm-12 > .form-control').type("456464")
    cy.get('.cvc > .form-control').type("2000")
    cy.get(':nth-child(2) > .form-control').type("2050")
    cy.get(':nth-child(3) > .form-control').type("2060")
    cy.get('#submit').contains("Pay and Confirm Order").should("be.visible").click()
    cy.get('.col-sm-9 > p').contains("Congratulations! Your order has been confirmed!").should("be.visible")
    cy.get(':nth-child(5) > a').contains(" Delete Account").click()
    cy.get('b').title("Account Deleted!")
    cy.get('.pull-right > .btn').contains("Continue").click()
  
})


Cypress.Commands.add("TEST_CASE_15",()=>{
    cy.contains("Signup / Login").click()
    cy.REGISTER_TC_14()
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get("[class='btn btn-success close-modal btn-block']").contains("Continue Shopping").click()
    cy.get(':nth-child(3) > a').contains("Cart").click()
    cy.location('pathname').should('include', '/view_cart')
    cy.get('.col-sm-6 > .btn').contains("Proceed To Checkout").should("be.visible").click()
    cy.get(':nth-child(3) > a').contains("Cart").click()
    cy.get('.col-sm-6 > .btn').contains("Proceed To Checkout").should("be.visible").click()
    cy.get('#address_delivery > .address_firstname').contains("Mr. patricio OLGA")
    cy.get('#address_delivery > :nth-child(4)').contains("patoADRESS@gmail.com")
    cy.get('#address_delivery > :nth-child(5)').contains("patoADRESS2@gmail.com")
    cy.get('#address_delivery > .address_country_name').contains("United States")
    cy.get('#address_delivery > .address_phone').contains("+998877454441")


    cy.get(':nth-child(4) > .heading').contains("Review Your Order").should("be.visible")

    cy.get('#product-1 > .cart_description > h4 > a').contains("Blue Top").should("be.visible")
    cy.get('#product-1 > .cart_price > p').contains("Rs. 500").should("be.visible")
    cy.get('#product-1 > .cart_quantity > .disabled').contains("1").should("be.visible")
    cy.get('#product-1 > .cart_total > .cart_total_price').contains("Rs. 500").should("be.visible")
    cy.get('.form-control').type("BUENISIMO EL PRODUCTO")
    cy.get(':nth-child(7) > .btn').contains("Place Order").click()
    cy.get(':nth-child(2) > .col-sm-12 > .form-control').type("SHOPPING")
    cy.get(':nth-child(3) > .col-sm-12 > .form-control').type("456464")
    cy.get('.cvc > .form-control').type("2000")
    cy.get(':nth-child(2) > .form-control').type("2050")
    cy.get(':nth-child(3) > .form-control').type("2060")
    cy.get('#submit').contains("Pay and Confirm Order").should("be.visible").click()
    cy.get('.col-sm-9 > p').contains("Congratulations! Your order has been confirmed!").should("be.visible")
    cy.get(':nth-child(5) > a').contains(" Delete Account").click()
    cy.get('b').title("Account Deleted!")
    cy.get('.pull-right > .btn').contains("Continue").click()
 
})

Cypress.Commands.add("TEST_CASE_16",()=>{
    cy.contains("Signup / Login").click()
    cy.SIGN_IN_PARAMETROS("pablo222@gmail.com","losloros222")
    cy.get(':nth-child(10) > a').contains("Logged in as pablo").should("be.visible")
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get("[class='btn btn-success close-modal btn-block']").contains("Continue Shopping").click()
    cy.get(':nth-child(3) > a').contains("Cart").click()
    cy.location('pathname').should('include', '/view_cart')
    cy.get('.col-sm-6 > .btn').contains("Proceed To Checkout").should("be.visible").click()
    cy.get(':nth-child(3) > a').contains("Cart").click()
    cy.get('.col-sm-6 > .btn').contains("Proceed To Checkout").should("be.visible").click()
    cy.get('#address_delivery > .address_firstname').contains("Mr. pablo workings")
    cy.get('#address_delivery > .address_country_name').contains("United States")
    cy.get('#address_delivery > .address_phone').contains("+99887745441")

    cy.get(':nth-child(4) > .heading').contains("Review Your Order").should("be.visible")

    cy.get('#product-1 > .cart_description > h4 > a').contains("Blue Top").should("be.visible")
    cy.get('#product-1 > .cart_price > p').contains("Rs. 500").should("be.visible")
    cy.get('#product-1 > .cart_quantity > .disabled').contains("1").should("be.visible")
    cy.get('#product-1 > .cart_total > .cart_total_price').contains("Rs. 500").should("be.visible")
    cy.get('.form-control').type("BUENISIMO EL PRODUCTO")
    cy.get(':nth-child(7) > .btn').contains("Place Order").click()
    cy.get(':nth-child(2) > .col-sm-12 > .form-control').type("SHOPPING")
    cy.get(':nth-child(3) > .col-sm-12 > .form-control').type("456464")
    cy.get('.cvc > .form-control').type("2000")
    cy.get(':nth-child(2) > .form-control').type("2050")
    cy.get(':nth-child(3) > .form-control').type("2060")
    cy.get('#submit').contains("Pay and Confirm Order").should("be.visible").click()
    cy.get('.col-sm-9 > p').contains("Congratulations! Your order has been confirmed!").should("be.visible")
    cy.get('.pull-right > .btn').contains("Continue").click()
    
})

Cypress.Commands.add("TEST_CASE_17",()=>{
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get("[class='btn btn-success close-modal btn-block']").contains("Continue Shopping").click()
    cy.get(':nth-child(3) > a').contains("Cart").click()
    cy.location('pathname').should('include', '/view_cart')
    cy.get('.cart_quantity_delete').click()
    cy.get('#empty_cart > .text-center').contains("Cart is empty! Click here to buy products").should("be.visible")
})

Cypress.Commands.add("TEST_CASE_18",()=>{
    cy.get(':nth-child(1) > .panel-heading > .panel-title').title("WOMEN")
    cy.get(':nth-child(2) > .panel-heading > .panel-title').title("MEN")
    cy.get(':nth-child(3) > .panel-heading > .panel-title').title("KIDS")
    cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click()
    cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click()
    cy.location('pathname').should('include', '/category_products/1')
    cy.get("h2[class='title text-center']").contains("Women - Dress Products").should("be.visible")
    cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click()
    cy.get('#Men > .panel-body > ul > :nth-child(2) > a').click()
    cy.location('pathname').should('include', '/category_products/6')
    
})

Cypress.Commands.add("TEST_CASE_19",()=>{
    cy.get('.shop-menu > .nav > :nth-child(2) > a').contains("Products").click()
    cy.get('.brands-name > .nav > :nth-child(1) > a').contains("Polo").should("be.visible")
    cy.get('.brands-name > .nav > :nth-child(2) > a').contains("H&M").should("be.visible")
    cy.get('.brands-name > .nav > :nth-child(3) > a').contains("Madame").should("be.visible")
    cy.get('.brands-name > .nav > :nth-child(4) > a').contains("Mast & Harbour").should("be.visible")
    cy.get('.brands-name > .nav > :nth-child(5) > a').contains("Babyhug").should("be.visible")
    cy.get('.brands-name > .nav > :nth-child(6) > a').contains("Allen Solly Junior").should("be.visible")
    cy.get('.brands-name > .nav > :nth-child(7) > a').contains("Kookie Kids").should("be.visible")
    cy.get('.brands-name > .nav > :nth-child(8) > a').contains("Biba").should("be.visible")
    cy.get('.brands-name > .nav > :nth-child(4) > a').contains("Mast & Harbour").should("be.visible").click()
    cy.location('pathname').should('include', '/brand_products/Mast%20&%20Harbour')
    cy.get('.brands-name > .nav > :nth-child(7) > a').contains("Kookie Kids").should("be.visible").click()
    cy.location('pathname').should('include', '/brand_products/Kookie%20Kids')
    
})

Cypress.Commands.add("TEST_CASE_20",()=>{
    cy.get('.shop-menu > .nav > :nth-child(2) > a').contains("Products").click()
    cy.location('pathname').should('include', '/products')
    cy.get('.title').title("All Products")
    cy.get('#search_product').type("jeans")
    cy.get('#submit_search').click()
    cy.get('.title').title("Searched Products")
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo').should("be.visible") //IMPORTANTE FACIL,VISUALIZAR PRODUCTO.
   // cy.get(':nth-child(3) > .product-image-wrapper').should("be.visible")
  //  cy.get(':nth-child(4) > .product-image-wrapper').should("be.visible")
//    cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo').should("be.visible")
   cy.get('.productinfo > .btn').contains("Add to cart").click()
   cy.get("[class='btn btn-success close-modal btn-block']").contains("Continue Shopping").click()
   cy.get('.shop-menu > .nav > :nth-child(3) > a').contains(" Cart").click()
   cy.get('#product-33').should("be.visible")
   cy.SIGN_IN_PARAMETROS("pablo222@gmail.com","losloros222")
   cy.get('.shop-menu > .nav > :nth-child(3) > a').contains(" Cart").click()
   cy.get('#product-33').should("be.visible")   
   
})

Cypress.Commands.add("TEST_CASE_21",()=>{
    cy.get('.shop-menu > .nav > :nth-child(2) > a').contains("Products").click()
    cy.location('pathname').should('include', '/products')
    cy.get('.title').title("All Products")
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').contains("View Product").click()
    cy.get('.category-tab > :nth-child(1) > .nav').contains("Write Your Review").should("be.visible")
    cy.get('#name').type("pablo")
    cy.get('#email').type("pablo222@gmail.com")
    cy.get('#review').type("me encanto el producto,gracias!!!!")
    cy.get('#button-review').contains("Submit").click()
    cy.get('.alert-success > span').contains("Thank you for your review.").should("be.visible")
  
})

Cypress.Commands.add("TEST_CASE_22",()=>{
    cy.get('.recommended_items > .title').title("recommended items")
    cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn').contains("Add to cart").click()
    cy.get('u').contains("View Cart").click()
    cy.get('#product-4').should("be.visible") 
})

Cypress.Commands.add("TEST_CASE_23",()=>{
    cy.contains("Signup / Login").click()
    cy.REGISTER_TC_14()
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get("[class='btn btn-success close-modal btn-block']").contains("Continue Shopping").click()
    cy.get(':nth-child(3) > a').contains("Cart").click()
    cy.location('pathname').should('include', '/view_cart')
    cy.get('.col-sm-6 > .btn').contains("Proceed To Checkout").should("be.visible").click()
    cy.get(':nth-child(3) > a').contains("Cart").click()
    cy.get('.col-sm-6 > .btn').contains("Proceed To Checkout").should("be.visible").click()
    cy.get('#address_delivery > .address_firstname').contains("Mr. patricio OLGA")
    cy.get('#address_delivery > :nth-child(4)').contains("patoADRESS@gmail.com")
    cy.get('#address_delivery > :nth-child(5)').contains("patoADRESS2@gmail.com")
    cy.get('#address_delivery > .address_country_name').contains("United States")
    cy.get('#address_delivery > .address_phone').contains("+998877454441")

    cy.get(':nth-child(5) > a').contains(" Delete Account").click()
    cy.get('b').title("Account Deleted!")
    cy.get('.pull-right > .btn').contains("Continue").click()
 
})

Cypress.Commands.add("TEST_CASE_24",()=>{
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get("[class='btn btn-success close-modal btn-block']").contains("Continue Shopping").click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').contains(" Cart").click()
        cy.location('pathname').should('include', '/view_cart')
        cy.get('.col-sm-6 > .btn').contains("Proceed To Checkout").should("be.visible").click()
        cy.get('.modal-body > :nth-child(2) > a > u').contains("Register / Login").click()
        cy.REGISTER_TC_14()
        cy.get(':nth-child(3) > a').contains("Cart").click()
        cy.get('.col-sm-6 > .btn').contains("Proceed To Checkout").should("be.visible").click()

        cy.get(':nth-child(4) > .heading').contains("Review Your Order").should("be.visible")

        cy.get('#product-1 > .cart_description > h4 > a').contains("Blue Top").should("be.visible")
        cy.get('#product-1 > .cart_price > p').contains("Rs. 500").should("be.visible")
        cy.get('#product-1 > .cart_quantity > .disabled').contains("1").should("be.visible")
        cy.get('#product-1 > .cart_total > .cart_total_price').contains("Rs. 500").should("be.visible")
        cy.get('.form-control').type("BUENISIMO EL PRODUCTO")
        cy.get(':nth-child(7) > .btn').contains("Place Order").click()
        cy.get(':nth-child(2) > .col-sm-12 > .form-control').type("NARANJA")
        cy.get(':nth-child(3) > .col-sm-12 > .form-control').type("45655464")
        cy.get('.cvc > .form-control').type("2010")
        cy.get(':nth-child(2) > .form-control').type("2030")
        cy.get(':nth-child(3) > .form-control').type("2090")
        cy.get('#submit').contains("Pay and Confirm Order").should("be.visible").click()
        cy.get('.col-sm-9 > p').contains("Congratulations! Your order has been confirmed!").should("be.visible")

     //   cy.get('.col-sm-9 > .btn-default').contains("Download Invoice").click()
        cy.get('.pull-right > .btn').contains("Continue").click()
        cy.get(':nth-child(5) > a').contains(" Delete Account").click()
        cy.get('b').title("Account Deleted!")
        cy.get('.pull-right > .btn').contains("Continue").click()
    
})

Cypress.Commands.add("TEST_CASE_25",()=>{
    cy.scrollTo('bottom')
    cy.get('.single-widget > h2').contains("Subscription").should("be.visible")
    cy.get('#scrollUp').click()
   
})

   // AUTOMATIZACION  PRACTICAS 19/12/2022 //

   Cypress.Commands.add("SIGN_1",(username1,password1)=>{
    cy.fixture("practicas").then((a1)=>{

        cy.get(a1.LOG_IN).contains("Signup / Login").should("exist").click()
        cy.location("pathname").should("include","/login")
        cy.get(a1.VISIBLE).contains("Login to your account").should("be.visible")
        cy.get(a1.username).should("exist").type(username1)
        cy.get(a1.password).should("exist").type(password1)
        cy.get(a1.BOTON_LOGIN).contains("Login").click()
     //   cy.location("host").should("eq","automationexercise.com")
      //  cy.get(a1.LOG_OUT).click()
      //  cy.location("pathname").should("include","/login")
        cy.contains(" Home").click()
})

})

Cypress.Commands.add("SIGN_2",(username2,password2)=>{
    cy.fixture("practicas").then((a1)=>{

        cy.get(a1.LOG_IN).contains("Signup / Login").should("exist").click()
        cy.location("pathname").should("include","/login")
        cy.get(a1.VISIBLE).contains("Login to your account").should("be.visible")
        cy.get(a1.username).should("exist").type(username2)
        cy.get(a1.password).should("exist").type(password2)
        cy.get(a1.BOTON_LOGIN).contains("Login").click()
        cy.get(a1.ALERT_LOGIN).contains("Your email or password is incorrect!").should("be.visible")
})

})


Cypress.Commands.add("PRODUCTOS",()=>{
  

})
























