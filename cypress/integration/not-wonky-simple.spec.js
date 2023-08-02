/// <reference types="cypress" />

import {
    navigate,
    searchProduct,
    searchSubmit,
    searchPriceBetween,
    verifyProductSearch,
    verifyProductDetails,
    cartAdditionNotWonky,
    cartVerification
}from "../PageObjects/test-functions";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

it('Should do ALL THE THINGS', () => {
    navigate();
    searchProduct("Lego Star Wars Sets");
    searchSubmit();
    searchPriceBetween('378', '380');
    verifyProductSearch("First Order Star Destroyer");
    verifyProductDetails("Star Destroyer", "369.99", "Movie");
    cartAdditionNotWonky();
    cartVerification("Star Destroyer");
})