/// <reference types = "cypress"/>

import PageObjects from "../location/PAGEOBJECT";

describe('TS - INTERCEPTER....', () => {
    beforeEach("URL", ()=>{
      cy.ENTRADA()
      cy.SIGN_IN_EFECTIVO()
     })

    it('AGREGANDO PRODUCTOS AL CARRITO ,PREVIAMENTE LOGEADO', () => {

        PageObjects.input_1()
        PageObjects.input_continue()

    }); 

    it('IR AL CARRITO ', () => {
      PageObjects.input_Cart()
      PageObjects.input_check()
      PageObjects.texts_checks()
      PageObjects.texts_checks2()
      PageObjects.texts_checks3()
      PageObjects.VALIDAR_PRICE()
      PageObjects.VALIDAR_QUANTITI()
      PageObjects.VALIDAR_TOTAL()
      PageObjects.VALIDAR_MONT()
      PageObjects.VALIDAR_MONT_TOTAL()
     PageObjects.BOTON_PLACE()
     PageObjects.text_comprar()
     PageObjects.input_name_card()
     PageObjects.textbox_card()
     PageObjects.input_name_card()
     PageObjects.textbox_card()
     PageObjects.input_number_card()
     PageObjects.textbox_number_card()
     PageObjects.input_cvc()
     PageObjects.text_cvc()
     PageObjects.input_expiration()
     PageObjects.text_expiration()
     PageObjects.text_card_vacio()
     PageObjects.boton_comprar()
   //  PageObjects.text_succ()
     PageObjects.text_exitosa()
     PageObjects.BOTON_FINALIZAR()
    });

})