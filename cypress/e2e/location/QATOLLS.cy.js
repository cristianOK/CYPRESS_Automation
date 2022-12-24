describe('REPORTS - HTML-', () => {
    beforeEach(() => {     
       cy.visit("https://demoqa.com")

      });
      it('TOOLS QA', () => {
        const web= "https://demoqa.com"
            cy.location("protocol").should("contains","https")
            cy.location("host").should("eq","demoqa.com")
            cy.request(web).its("status").should("eq",200)

      });

      it.only('RADIO BUTTON', () => {
        const a1= "Elements"
        cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').contains(a1).should("be.visible").click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').contains("Radio Button").click()
        cy.get('.col-md-6 > :nth-child(2) > :nth-child(2)').contains("Yes").click().should("exist")

      });

    });
