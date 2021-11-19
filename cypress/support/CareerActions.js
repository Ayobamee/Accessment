
import CareerPage from "../pageObjects/CareerObjects";
import HomePage from "../pageObjects/HomeObjects";
import Testdata from "../TestData/testdata";

const testData = new Testdata("07060406267", "2","3","4","5","6","7");
// const loginPage = new LoginPage();
const homePage = new HomePage();
const careerPage = new CareerPage();

// Cypress.Commands.add("clickCareers", () => {

//   HomePage.getCareersButton().click()

//   //loginPage.getLogin().click();
//   //  loginPage.getPhoneNumber().type(testData.username);
//   //  loginPage.getContinue().click();
//   //  loginPage.getPin1().type(testData.pin1);
//   //  loginPage.getPin2().type(testData.pin2);
//   //  loginPage.getPin3().type(testData.pin3);
//   //  loginPage.getPin4().type(testData.pin4);
//   //  loginPage.getPin5().type(testData.pin5);
//   //  loginPage.getPin6().type(testData.pin6);
//   //  loginPage.getSecondLogin().click();
//   //  homePage.getShopName().should('be.visible');
// });


Cypress.Commands.add("clickCareers", () => {
  homePage.getCareersButton().click()
});


Cypress.Commands.add("viewOpenPositions", () => {
  careerPage.getViewHotRolesButton().click()
});

Cypress.Commands.add("AssertOpenPositions", () => {
  if(careerPage.getSeniorQAAutomationEngineerModule().should('be.visible')&&
  careerPage.getSeniorBackEndDeveloperWithNodeJsAndPhpModule().should('be.visible')&&
  careerPage.getSeniorFrontEndDeveloperModule().should('be.visible')){

    cy.log("Candidate can see open positions")
  }

  else{
    cy.log("Canidate cannot see open positions")

  }
 
  
});



