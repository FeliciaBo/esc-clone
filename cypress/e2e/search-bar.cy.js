//Gör något som både kan bli rätt och fel t ex sökning på datum i filter, 
// Kontrollerar att webbsidan ger relevant ett relevant svar eller felmeddelande. 
// (det är alltså responsen som ska testas)

describe('Search bar test', () => {

  it('Should show result or error message', () => {

    cy.visit('/all') //challenges page

        cy.get('.filterBtn').click() //clicks filter button to open menu

        cy.get('.tag').should('exist') //checks for tags

        cy.get('body')
       .should('contain.text', 'Book this room').or('contain.text', 'Take challenge online')
        .or('contain.text', 'No matching challenges')

  })

})