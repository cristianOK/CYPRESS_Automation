class test_Case_7{
   TC_visible(){cy.get('.shop-menu > .nav > :nth-child(6) > a').contains("Test Cases").should("be.visible").click()}

   location(){cy.location('pathname').should('include', '/test_cases')}
}

module.exports= new test_Case_7();