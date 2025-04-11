describe('Exercise 1', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('.Mui-selected').contains('Exercise 1 - Find Product').click();
    });

    it('find the product with price $59 and return all elements of his div', () => {
        cy.get('.product-list').get('[data-cy="product-item"]').each(($product) => {
            const itemPrice = $product.find('[data-cy="product-price"]').text();
            const itemName = $product.find('[data-cy="product-name"]').text();
            if (itemPrice === '$59') {
                cy.log("The item price is " + itemPrice + " and the item name is " + itemName);
            }
        });
    });
});

/**
 * Use of beforeEach to ensure that in any subsequent scenario, we correctly access the website and remain within the context of the correct exercise page
 * After locating the product list and ensuring I am on the product-item element,
 * I instantiate two variables to store the product session values
 * Once instantiated, I return the product data according to the requested value
 */