// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })

import LoginPage from "../pageObjects/Login";
import Testdata from "../TestData/testdata";

const testData = new Testdata("licensedev@1wa.org", "ydv42eJkdvL2YH_");
const loginPage = new LoginPage();


Cypress.Commands.add('OpenContentfulUrl', (user) => {
  //Pick test Url from environment
  cy.visit(Cypress.env("contentfulTestUrl"));
})


Cypress.Commands.add('Login', (user) => {

  loginPage.getEmail().type(testData.username)

  loginPage.getPassword().type(testData.password)

  loginPage.getLogin().click()
  

})








//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... 
