import { userPlan1, userPlan2 } from "../../fixtures/constants/user-constants"
describe('Exercise 5', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('.MuiTabs-flexContainer').contains('Exercise 5 - Login Command').click()
    })

    it('user login healt-plan 1', () => {
        cy.Login(userPlan1)
    })
    it('user login health-plan 2', () => {
        cy.Login(userPlan2)
    })
})

/**
 * Use of beforeEach to ensure that in any subsequent scenario, we correctly access the website and remain within the context of the correct exercise page
 * My goal in creating a constant from data coming from a JSON object is to simulate something as close as possible to a database. 
 * By creating a constant, I have the ability to combine data in various formats without depending on how they come from the source,
 * to increasing the flexibility and data coverage in the tests.
 * After configuring the custom commands file in cypress.config.js and importing the command class, I implement the creation of a custom command.
 * Within this class, I define the user command, which accepts two parameters: email and password.
 * Next, I create the basic logic for data input using type(), leveraging data-cy selectors to ensure precise element identification. 
 * Finally, I execute the login action with click() and validate the operation’s success by checking the visibility of the "Welcome Back" message using should('be.visible').
 * Afterwards, in my main test execution class, I can instantiate new objects and perform validations by passing the user object as a parameter within the custom commands.
*/
