/// <reference types="cypress" />

export function navigate() {
    cy.visit('https://amazon.com/');
}

export function searchProduct(name) {
    cy.get('#nav-search').type(name);
}

export function searchSubmit(){
    cy.get('#nav-search-submit-button').click();
}

export function searchPriceBetween(low, high){
    cy.get('#low-price').type(low);
    cy.get('#high-price').type(high);
    cy.get('.a-button-input').click();
}

export function verifyProductSearch(productName){
    cy.contains(productName).click();
}

export function verifyProductDetails(productTitle, productPrice, productTheme){
    cy.get('#productTitle').should('be.visible').and('contain', productTitle);
    cy.get('#corePriceDisplay_desktop_feature_div > .a-spacing-none').should('be.visible').and('contain', productPrice);
    cy.get('.po-theme > .a-span9 > .a-size-base').should('contain', productTheme);
}

export function cartAdditionWonky(){
    cy.get('#add-to-cart-button').click();
    cy.wait(3000)
    cy.reload();
    pleaseConfirmItems();
}

export function cartAdditionNotWonky(){
    cy.get('#add-to-cart-button').click();
    cy.wait(3000)
    cy.reload();
}

export function cartVerification(simpleProductDescription){
    cy.get('#nav-cart').click()
    cy.get('.a-link-normal > .a-size-medium').should('be.visible').and('contain', simpleProductDescription)
    cy.get('.sc-action-delete > .a-declarative > .a-color-link').click()
    cy.get('#sc-active-cart').should('be.visible').and('contain', "empty")
}

export function pleaseConfirmItems() {
    cy.get('h5').should('be.visible')
      .and('contain', "Please confirm that you").then((result) => {
        if(result){
            cy.get('.a-button-input').click();
        }
      })
    cy.reload();

}