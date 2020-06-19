describe('Input and submit button', () => {
    it('can navigate to the site', (() => {
        cy.visit('http://localhost:3000 ')
        cy.url().should('include', 'localhost')
    }))
    it('can fill in a text box', (() => {
        cy.get('input')
    }))