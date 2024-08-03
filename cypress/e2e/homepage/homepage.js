import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given("precondition", () => {
    cy.visit('https://sibermu.ac.id/');
});

When("action", () => {
    cy.title().should('eq','Halaman Depan - Universitas Siber Muhammadiyah')
});

Then("expected outcome", () => {
    cy.title().should('eq','Halaman Depan - Universitas Siber Muhammadiyah')
});
