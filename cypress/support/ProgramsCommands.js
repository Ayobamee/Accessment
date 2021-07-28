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

const baseUrl = "https://1wa.org/#/";

import ProgramPage from "../pageObjects/ProgramPage";
const Page = new ProgramPage();
  Cypress.Commands.add('Programs', (user) => {
    //Get programs from program page objects
    Page.getPrograms().click()  
  })

  Cypress.Commands.add('TestPrograms', (user) => {
    //Get Test programs from program page objects
    Page.getTestPrograms().click()  
  })



  Cypress.Commands.add('AddToCart', (user) => {
    //Add to cart
    Page.getAddToCart().click() 
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
