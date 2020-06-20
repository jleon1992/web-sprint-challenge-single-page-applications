describe('Interactive Test', () => {
    it('can navigate to the site', (() => {
        cy.visit('http://localhost:3000')
    }))
    it('can place an order', () => {
        cy.get('button').click()
    })
    it('can add text to the box', () => {
        cy.get('input[name=name]').type('Cori')
    })
    it('can select multiple toppings', () => {
        cy.get('input[name=pepperoni]').click()
        cy.get('input[name=mushrooms]').click()
    })
    it('can be submitted', () => {
        cy.get('button.confirmBtn').click()
    })
})