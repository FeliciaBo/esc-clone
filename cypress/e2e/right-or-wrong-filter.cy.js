//Gör något som både kan bli rätt och fel t ex sökning på datum i filter, 
// Kontrollerar att webbsidan ger relevant ett relevant svar eller felmeddelande. 
// (det är alltså responsen som ska testas)

describe('Test filtered function and get results', () => {

  it('Should show cards', () => {

    cy.visit('/all.html') //challenges page

        cy.get('.filterBtn').click() //clicks filter button to open menu

        cy.get('.filter__user-input').type('a') //text that should return result

        
    cy.get('body').should(($body) => {

  const challengeCards = $body.find('.challenge__imageWrapper:visible') //check for visible challange cards


  expect(challengeCards.length > 0 ) 

})

    })

  })


describe('Test filtered function and get error message', () => {

  it('Should show error message', () => {

    cy.visit('/all.html') //challenges page

        cy.get('.filterBtn').click() //clicks filter button to open menu

        cy.get('.filter__user-input').type('aptsrghs') //text that should not return result

        
    cy.get('body').should(($body) => {

  const error = $body.text().includes('No matching challenges')

  expect(error).to.be.true

})

    })

  })

