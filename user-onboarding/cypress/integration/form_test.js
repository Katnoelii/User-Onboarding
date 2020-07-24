///Cypress testing done here!!

///Task 1: Get the name input and type a name in it || DONE
///Task 2: Use an assertion to check if the text inputted contains the name you provided(Hint:use the .should assertion) || DONE
///Task 3: Get the email input and type an email address in it || DONE
///Task 4: Get the password input and type a password into it || DONE
///Task 5: Set up a test that will check to see if a user can check the terms of service box || DONE
///Task 6: Check to see if a user can submit the form data || DONE
///Task 7: Check for form validation if an input is left empty

describe('Inputs', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })
    it('can type a username into the username input', () => {
        cy.get('input[name="username"]')
        .type('kroy15chs')
        .should('have.value', 'kroy15chs')
    })
    it('can type a name into the name input', () => {
        cy.get('input[name="name"]')
        .type('Katelyn')
        .should('have.value','Katelyn')
    })
    it('can type an email into the email input', () => {
        cy.get('input[name="email"]')
        .type('kroy15chs@gmail.com')
        .should('have.value','kroy15chs@gmail.com')
    })
    it('can type a password into the password input', () => {
        cy.get('input[name="password"]')
        .type('hooplah23')
        .should('have.value',"hooplah23")
    })
    it('can select a student status',() => {
        cy.get('input[name="status"]')
        .check('yes')
        .should('be.checked','yes')
    })
    it('Can agree to the Terms of Use', () => {
        cy.get('input[name="terms"]')
        .check()
        .should('be.checked')
    })
    it('Submit button is no longer disabled', () => {
        cy.get('button#submit')
        .should('not.be.disabled')
    })
    it('can submit a new user', () => {
        cy.get('#submit')
        .click()
    })
})
describe('Validation', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })
    it('Toggles email Validation error', () => {
        cy.get('input[name="email"]')
        .type('kate@kate')
        .should('have.value', 'kate@kate')
        cy.get('.errors')
        .contains('Must be a valid Email')
    })
})