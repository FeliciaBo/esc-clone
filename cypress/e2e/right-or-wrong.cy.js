//Gör något som både kan bli rätt och fel t ex sökning på datum i filter, 
// Kontrollerar att webbsidan ger relevant ett relevant svar eller felmeddelande. 
// (det är alltså responsen som ska testas)
describe('Test for cards on challenges page', () => {

  it('Should show cards or error message', () => {

    cy.visit('/all.html')
    

    cy.get('body').should(($body) => {

  const challengeCards = $body.find('.challenge__imageWrapper:visible') //kolla att challenge-kort finns och syns

  const error = $body.text().includes('No matching challenges') //kolla att error-texten finns

  expect(challengeCards.length > 0 || error).to.be.true //antlignen syns challenge kort, eller error-text

})

    })

  })
