class home {

   elements ={
    INPUT_USERNAME: ()=> cy.get("[data-qa='login-email']"),
    INPUT_PASSWORD: () =>cy.get("[data-qa='login-password']"),
    INPUT_BOTON: () =>cy.get("[data-qa='login-button']"),
    ERROR_MESSAGE:()=>cy.get("p Your email or password is incorrect!")
   }


   typeUser(username){
     this.elements.INPUT_USERNAME().type(username)    
   }
   
   typePASSWORD(password){
    this.elements.INPUT_PASSWORD().type(password)    
  }

  typeCLICK(){
    this.elements.INPUT_BOTON().click()
  }
    
  SIGN_IN(){
    cy.contains("Signup / Login").should("be.visible").click()
  }

}

class AGREGANDO_PRODUCTOS{

    input_1(){cy.get("[data-product-id='1']").contains("Add to cart").click()}

    input_2(){cy.get("[data-product-id='2']").contains("Add to cart").click()}

    input_3(){cy.get("[data-product-id='3']").contains("Add to cart").click()}

   input_continue(){cy.get("[class='btn btn-success close-modal btn-block']").click()}

    input_Cart(){cy.get('.shop-menu > .nav > :nth-child(3) > a').contains(" Cart").click()}
  
    input_check(){cy.get("[class='btn btn-default check_out']").contains("Proceed To Checkout").click()}

    texts_checks(){cy.get("[class='heading']").contains("Address Details").should("be.visible")}
    texts_checks2(){cy.get("[class='page-subheading']").contains("Your delivery address").should("be.visible")}
    texts_checks3(){cy.get("[class='page-subheading']").contains("Your billing address").should("be.visible")}

    VALIDAR_PRICE(){cy.get("[class='cart_price']").contains("Rs. 500").should("be.visible")}
    VALIDAR_QUANTITI(){cy.get("[class='disabled']").contains("1").should("be.visible")}
    VALIDAR_TOTAL(){cy.get("[class='cart_total_price']").contains("Rs. 500").should("be.visible")}
    VALIDAR_MONT(){cy.get("[colspan='2']").contains("Total Amount").should("be.visible")}
    VALIDAR_MONT_TOTAL(){cy.get("[class='cart_total_price']").contains("Rs. 500")}

    BOTON_PLACE(){cy.get(':nth-child(7) > .btn').click()}

    text_comprar(){cy.get("h2[class='heading']").contains("Payment").should("be.visible")}
    input_name_card(){cy.get(':nth-child(2) > .col-sm-12 > .control-label').contains("Name on Card").should("be.visible")}
    textbox_card(){cy.get(':nth-child(2) > .col-sm-12 > .form-control').type("MASTERCARD")}

    input_number_card(){cy.get(':nth-child(3) > .col-sm-12 > .control-label').contains("Card Number").should("be.visible")}
    textbox_number_card(){cy.get(':nth-child(3) > .col-sm-12 > .form-control').type("456464")}
    input_cvc(){cy.get('.cvc > .control-label').contains("CVC").should("be.visible")}
    text_cvc(){cy.get('.cvc > .form-control').type("2000")}
    input_expiration(){cy.get(':nth-child(2) > .control-label').contains("Expiration").should("be.visible")}
    text_expiration(){cy.get(':nth-child(2) > .form-control').type("2050")}

    text_card_vacio(){cy.get(':nth-child(3) > .form-control').type("2060")}

    boton_comprar(){cy.get('#submit').contains("Pay and Confirm Order").should("be.visible").click()}
 
   // text_succ(){cy.contains("ORDER PLACED!")}
    text_exitosa(){cy.get('.col-sm-9 > p').contains("Congratulations! Your order has been confirmed!").should("be.visible")}
    BOTON_FINALIZAR(){cy.get('.pull-right > .btn').contains("Continue")}

}

class VISIVILIZANDO{
   homepage(){cy.visit("https://automationexercise.com").title().should("eq","Automation Exercise")}
   input_productos(){cy.get("[href='/products']").click()}
   location_prod(){cy.location('pathname').should('include', '/products')}
   search_product(){cy.get('#search_product').type("blue")}
   submit_prod(){cy.get('#submit_search').click()}
   products_1(){cy.get("[src='/get_product_picture/1']").should("be.visible")}
   products_16(){cy.get("[src='/get_product_picture/16']").should("be.visible")}
   products_21(){cy.get("[src='/get_product_picture/21']").should("be.visible")}
   products_24(){cy.get("[src='/get_product_picture/24']").should("be.visible")}
   products_37(){cy.get("[src='/get_product_picture/37']").should("be.visible")}
   products_41(){cy.get("[src='/get_product_picture/41']").should("be.visible")}
   products_43(){cy.get("[src='/get_product_picture/43']").should("be.visible")}
}

class SUSCRIPTION{
    homepage1(){cy.visit("https://automationexercise.com").title().should("eq","Automation Exercise")}
    text_suscription(){cy.get("h2").contains("Subscription").should("be.visible")}
    email_suscription(){cy.get("[id='susbscribe_email']").type("pablo222@gmail.com")}
    bottom_suscription(){cy.get("[id='subscribe']").click()}
    alert_suscription(){cy.get('.alert-success').contains("You have been successfully subscribed!").should("be.visible")}
}




module.exports = new home();
module.exports = new AGREGANDO_PRODUCTOS();
module.exports= new VISIVILIZANDO();
module.exports= new SUSCRIPTION();