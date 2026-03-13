//test som  gör flera moment och navigerar från startsidan 
// till olika sidor på sajten, t ex “The Story”.

describe ('Navigation test', () => {

    it('Should navigate from homepage, to challenges and then open booking"', () => {
        cy.visit('/')
         cy.get('.hero__buttons__onsite').first().click() //clicks first element with class name

          cy.url().should('include', 'all')

        cy.get('.challenge__bookbutton').eq(1).click() //clicks second element with class name


    })
})