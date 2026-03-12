//test som  gör flera moment och navigerar från startsidan 
// till olika sidor på sajten, t ex “The Story”.

describe ('Navigation test', () => {

    it('Should navigate from homepage, to challenges and then open booking"', () => {
        cy.visit('/')
         cy.get('.hero__buttons__onsite').first().click() //klickar på första elementet med klassnamnet

        cy.get('.challenge__bookbutton').eq(1).click() //klickar på andra elementet med klassnamnet
    })
})