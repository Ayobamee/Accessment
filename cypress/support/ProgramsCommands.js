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

  Cypress.Commands.add('GetCart', (user) => {
    //Getcart
    Page.getCart().click()
  })


  Cypress.Commands.add('RemoveFromCart', (user) => {
    //Remove to cart
    Page.getRemoveFromCart().click()
  })

  Cypress.Commands.add('ClickNext', (user) => {
    //Click Next
    Page.getNext().click()
  })

  Cypress.Commands.add('EnterOrgName', (user) => {
    //Click Next
    Page.getOrgName().type('Test 1wa')
  })

  Cypress.Commands.add('EnterCountry', (user) => {
    //Click Next
    Page.getCountry().type('Nigeria')
  })

  Cypress.Commands.add('EnterContactName', (user) => {
    //Click Next
    Page.getContactName().type('Tester')
  })

  Cypress.Commands.add('EnterEmail', (user) => {
    //Click Next
    Page.getEmail().type("testa@yahoo.com")
  })

  Cypress.Commands.add('EnterWebsite', (user) => {
    //Click Next
    Page.getWebsite().type("www.com")
  })

  Cypress.Commands.add('EnterPhonenumber', (user) => {
    //Click Next
    Page.getPhone().type("07060406267")
  })

  Cypress.Commands.add('EnterWhatsapp', (user) => {
    //Click Next
    Page.getWhatsapp().type("07060406267")
  })

  Cypress.Commands.add('ClickSend', (user) => {
    //Click Next
    Page.getSend().click()
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
