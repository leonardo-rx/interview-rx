import moment from 'moment-timezone';
const date = moment.tz("05/14/2024 08:00:00", "America/Los_Angeles").format("MM/DD/YYYY");

describe('Exercise 2', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('.MuiTabs-flexContainer').contains('Exercise 2 - Table Elements').click()
    })

    it('find elements with the date match with the 05/14/2024 date', () => {
        cy.get('table[name="Test1"]')
            .find("tbody")
            .filter(`:contains("${date}")`)
            .as("test-table")
        cy.get('@test-table').within(() => {
            cy.get('tr > td > p').eq(1).contains('First')
            cy.get('tr > td > span').eq(3).contains('Accepted')
            cy.get('tr > td > button').eq(4).contains('View')
            cy.get('tr > td > .button-order-more-items').contains('Order More').click()
        })
    })
})

/**
 * Use of beforeEach to ensure that in any subsequent scenario, we correctly access the website and remain within the context of the correct exercise page
 * Here I had to change contains to filter because, for some reason, Cypress wasn't able to find all the elements in the table using contains
 * It was also necessary to make a change to moment.tz to use a static date instead of a dynamic one
 * Using within, I can access all elements inside the table and then interact with them according to their respective indices using their index positions
 * This is my first time interacting with elements in a table, so I believe there's room for improvement and to implement a more dynamic way of retrieving its items
 */