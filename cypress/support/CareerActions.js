
import CareerPage from "../pageObjects/CareerObjects";
import HomePage from "../pageObjects/HomeObjects";


const homePage = new HomePage();
const careerPage = new CareerPage();

Cypress.Commands.add("clickCareers", () => {
  homePage.getCareersButton().click()
});


Cypress.Commands.add("viewHotRoles", () => {
  careerPage.getViewHotRolesButton().click()
});

Cypress.Commands.add("AssertOpenPositions", () => {
  if(
  careerPage.getSeniorQAAutomationEngineerModule().should('be.visible')&&
  careerPage.getSeniorBackEndDeveloperWithNodeJsAndPhpModule().should('be.visible')&&
  careerPage.getSeniorFrontEndDeveloperModule().should('be.visible')
  )
  {

    cy.log("Candidate can see open positions")
  }

  else{
    cy.log("Canidate cannot see open positions")

  }
});


Cypress.Commands.add("ApplyToBackEndRolewithMissingCandidateName", () => {
  careerPage.getApplyToBackEndRole().click()
  careerPage.getCandidateEmailNameAddressField().type(careerPage.randomChar(4)+"@automation.com")
  careerPage.getMessageField().type("I am applying for the Back end developer role using automated tests")
}); 


Cypress.Commands.add("ApplyToBackRoleEndwithMissingCandidateEmail", () => {
  careerPage. getApplyToBackEndRole().click()
  careerPage.getCandidateNameField().type("AutomatedTestUser"+careerPage.randomChar(4))
  careerPage.getMessageField().type("I am applying for the Back end developer role using automated tests")
});  


Cypress.Commands.add("ApplyToBackRoleEndwithMissingMessage", () => {
  careerPage. getApplyToBackEndRole().click()
  careerPage.getCandidateNameField().type("AutomatedTestUser"+careerPage.randomChar(4))
  careerPage.getCandidateEmailNameAddressField().type(careerPage.randomChar(4)+"@automation.com")
});


Cypress.Commands.add("ApplyToBackEndRoleWithoutClickingCaptcha", () => {
  careerPage. getApplyToBackEndRole().click()
  careerPage.getCandidateNameField().type("AutomatedTestUser"+careerPage.randomChar(4))
  careerPage.getCandidateEmailNameAddressField().type(careerPage.randomChar(4)+"@automation.com")
  careerPage.getMessageField().type("I am applying for the Back end developer role using automated tests")
});  



Cypress.Commands.add("ApplyToBackEndRole", () => {
  careerPage. getApplyToBackEndRole().click()
  careerPage.getCandidateNameField().type("AutomatedTestUser"+careerPage.randomChar(4))
  careerPage.getCandidateEmailNameAddressField().type(careerPage.randomChar(4)+"@automation.com")
  careerPage.getMessageField().type("I am applying for the Back end developer role using automated tests")

}); 


Cypress.Commands.add("clickRecaptcha", () => {
  cy.window().then(win => {
    win.document
      .querySelector("iframe[src*='recaptcha']")
      .contentDocument.getElementById("recaptcha-token")
      .click();
  });
});



Cypress.Commands.add("clickSendToCOmpleteApplication", () => {
      careerPage.getSendButton().click()
});




