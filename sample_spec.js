describe('My First Test', () => {
  it('Visit Kitchen web', () => {

    cy.visit('https://example.cypress.io')

    //cy.pause()

    cy.contains('submit').click()
    //expect(true).to.equal(false)

    cy.url().should('include', '/commands/actions')

    cy.get('.action-clear')
        .type('testing type')
        .should('have.value', 'testing type')
  })
})