//test som letar efter specifikt webbelement i filter av Challenges på webbsidan.

describe('Filter tab in challenges', () => {
    it('Should find filter tab', () => {
        cy.visit('/all.html') //challenges page

        cy.get('.filterBtn').click() //clicks filter button to open menu

        cy.get('.filters__close').should('exist') //checks for crossmark
    })
})