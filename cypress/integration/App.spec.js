/* global cy */

describe('StartScreen', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage()
  })

  it('check all elements on startScreen', () => {
    cy.get('[data-id-test="overview"]').should('exist')
    cy.get('[data-id-test="news-img"]').should('exist')
  })
})
