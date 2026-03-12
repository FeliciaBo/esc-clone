

describe ('Header test', () => {

    it('Should find h1 on homepage', () => {
        cy.visit('/')
        cy.contains('h1', 'Hacker Escape Room')
    })
})