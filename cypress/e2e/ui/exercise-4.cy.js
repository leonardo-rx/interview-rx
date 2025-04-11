describe('Exercise 4', () => {
    beforeEach(()=>{{
        cy.visit('/')
        cy.get('.MuiTabs-flexContainer').contains('Exercise 4 - Element Relations').click()
    }})
    
    it('verify old car element.', () => {
        cy.get('.container')
            .find('.my-class')
            .contains('span', 'old-car')
            .should('exist');
    })
    it('verify if number 1 has a sibling with old-card', () => {
        cy.get('.my-class')
            .contains('span', 'old-car')
            .siblings('span')
            .contains('1') 
            .should('exist')
    })
})

/**
 * Use of beforeEach to ensure that in any subsequent scenario, we correctly access the website and remain within the context of the correct exercise page
 *
 * 1. verify old car element
 * After performing a basic search for the parent element in the DOM, 
 * I use .contains to ensure "old car" exists within the <span> and .should('exist') to verify the element's existence.
 * An alternative would also be to check if the element is visible, using .should('be.visible').
 * 
 * 
 * 2. verify if number 1 has a sibling with old-card
 * I use .siblings() to find the sibling element with the text "old-car" and use .contains to verify if the 1 exists within the <span> element.
 */