describe('Exercise 3', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('.MuiTabs-flexContainer').contains('Exercise 3 - Checkbox Verification').click()
    })
    
    it('verify if a specific checkbox is checked.', () => {
        cy.get('[data-cy="test-grid-3"]').find('.item-content')
            .contains('p', 'Test2').parents('.item-content')
            .find('input[type="checkbox"]').should('be.checked')
    })
})

/**
 * Use of beforeEach to ensure that in any subsequent scenario, we correctly access the website and remain within the context of the correct exercise page
 * After selecting all elements with the data-cy attribute referencing the grid, 
 * I use the .item-content class to validate whether the lang attribute I’m looking for is present 
 * I then use .parents() to ensure these elements are nested within the .item-content hierarchy
 * Once these items are validated, I can verify the item type and its status: checked or unchecked
 */