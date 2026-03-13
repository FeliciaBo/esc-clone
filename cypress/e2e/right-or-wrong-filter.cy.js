//Gör något som både kan bli rätt och fel t ex sökning på datum i filter, 
// Kontrollerar att webbsidan ger relevant ett relevant svar eller felmeddelande. 
// (det är alltså responsen som ska testas)

describe('Test filtered function and get results', () => {

  it('Should show cards', () => {

    cy.visit('/all.html') //challenges page

        cy.get('.filterBtn').click() //clicks filter button to open menu

        cy.get('.filter__user-input').type('a')

        
    cy.get('body').should(($body) => {

  const challengeCards = $body.find('.challenge__imageWrapper:visible') //check for visible challange cards


  expect(challengeCards.length > 0 ) 

})

    })

  })



