describe('My First Test', () => {


    before(() => {
     alert('testing before')
    })


  it('Visit Kitchen web', () => {

    /*
    Visiting default url on cypress.json, searching "submit" button and then clicking on it.
    Asserting url.
    Typing on form.
    */
    cy.visit('/')
    //cy.pause()
    cy.contains('submit').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-clear')
        .type('testing type')
        .should('have.value', 'testing type')

    /*
    Going back, to default url
    */
    cy.go('back')

    /*
    Looking for text "type" and clicking it.
    Doing a double click.
    */
    cy.contains('type').click()
    cy.get('.action-div')
            .dblclick()

    

  })
})