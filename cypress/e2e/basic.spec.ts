context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Home', () => {
    cy.url().should('eq', 'https://localhost:8412/')

    cy.contains('As a full-stack developer').should('exist')
  })
})
