//Skapa ett automatiskt test i cypress som kontrollerar att webbsidan är uppe och kör på localhost.
//Testet ska också kontrollera ett statiskt textinnehåll i ett HTML-element på starsidan t ex “h1”.

describe ('Check that page is available/deployed', () => {

    it('Should find h1 on homepage', () => {

        cy.request('/').its('status').should('eq', 200) //checks that page is running

        cy.visit('/')

        cy.contains('h1', 'Hacker Escape Room')
    })
})