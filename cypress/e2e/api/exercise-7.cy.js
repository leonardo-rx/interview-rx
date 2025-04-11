describe('Exercise 7', () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    beforeEach(() => {
        cy.visit('/');
        cy.get('.MuiTabs-flexContainer').contains('Exercise 7 - API Intercept').click();
    });

    it('API Interception', () => {
        cy.intercept('POST', url, (req) => {
            expect(req.body).to.include({
                title: 'Product Added',
                body: 'Added product to cart',
                userId: 1
            });
            expect(req.body.title).to.eq('Product Added');
            expect(req.body.body).to.eq('Added product to cart');
            expect(req.body.userId).to.eq(1);

            req.continue((res) => {
                expect(res.body).to.have.property('id');
            });

        }).as('postReq');

        cy.request({
            method: 'POST',
            url: url,
            body: {
                title: 'Product Added',
                body: 'Added product to cart2',
                userId: 1
            }
        });
    });
});

/**
 * Use of beforeEach to ensure that in any subsequent scenario, we correctly access the website and remain within the context of the correct exercise page
 * Linked to cy.intercept, I perform two validations: I ensure that the request body contains the necessary values, 
 * and then I confirm that these values were actually sent. Using a callback function,
 * I check if the response has the id property, and after that, I perform the POST request that should be intercepted. 
 */ 