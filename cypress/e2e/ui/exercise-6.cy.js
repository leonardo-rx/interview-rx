describe('Exercise 6', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('.MuiTabs-flexContainer').contains('Exercise 6 - Product Selection').click()
    })

    it('find the product card containing "Gaming Headset and click in add button"', () => {
        cy.get('.product-card')
            .contains('h2', 'Gaming Headset')
            .parents('.product-card')
            .find('[data-cy="add-button"]')
            .click();
    })
})

/**
 * Use of beforeEach to ensure that in any subsequent scenario, we correctly access the website and remain within the context of the correct exercise page
 * Using cy.get, I select the .product-card element (which contains all products) and verify the presence of the desired item via the .contains() method, 
 * ensuring it exists within the parent class hierarchy.
 * Next, I locate the "Add" button using the [data-cy="adicionar-item"] selector and perform the click action with click().
 */ 