/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

it('should visit Amazon', () => {

    cy.visit('https://amazon.com/?delay=5000')
    //cy.wait(1000)
    cy.get('#nav-search').type("Lego Star Wars Sets")
    //cy.wait(1000)
    cy.get('#nav-search-submit-button').click()
    cy.get('#low-price').type("378")
    cy.get('#high-price').type("380")
    cy.get('.a-button-input').click()
    cy.contains("First Order Star Destroyer").click()

    cy.get('#productTitle').should('have.text', '        LEGO Star Wars Episode VIII First Order Star Destroyer 75190 Building Kit (1416 Piece)       ')

    cy.get('.po-theme > .a-span9 > .a-size-base').should('have.text', 'Movie')

    cy.get('#corePriceDisplay_desktop_feature_div > .a-spacing-none').should('have.text', '             $379.99$379.99        ')

    cy.get('#add-to-cart-button').click()

    cy.wait(3000)

    cy.reload()

    cy.get('#nav-cart').click()

    cy.get('.a-link-normal > .a-size-medium').should('be.visible').and('contain', "Star Destroyer")

    cy.get('.sc-action-delete > .a-declarative > .a-color-link').click()

    cy.get('[data-action="delete"] > .a-size-base').should('be.visible').and('contain', "Star Destroyer")

    cy.get('#sc-active-cart').should('be.visible').and('contain', "empty")
})