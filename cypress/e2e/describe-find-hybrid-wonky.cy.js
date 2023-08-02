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

describe('Find Product', () => {

    it('should visit Amazon and Search', () =>{
        navigate();
        searchProduct("Lego Star Wars Sets");
        searchSubmit();
        searchPriceBetween('378', '380');
        verifyProductSearch("First Order Star Destroyer");
    })

    it('should verify the product information', () => {
        verifyProductDetails("LEGO Star Wars Episode VIII First Order Star Destroyer 75190" , "369.99", "Movie");
        })

    it('should add the product to the cart and verify', () =>{
        cartAdditionNotWonky();
        cartVerification("Star Destroyer");
    })

})