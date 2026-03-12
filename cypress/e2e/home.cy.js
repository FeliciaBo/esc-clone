describe('home', () => {
    it('is up and shows title', () => {
        cy.visit('/');
        cy.get('h1').should('have.text', 'Hacker Escape Room');

    });
});