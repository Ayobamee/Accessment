class careerPage {



  getViewHotRolesButton()
  {
    return cy.get('.careers-button')
  }


  getSeniorBackEndDeveloperWithNodeJsAndPhpModule()
  {
    return cy.contains('Senior Backend Developer with Node.js & PHP')
  }


  getSeniorQAAutomationEngineerModule()
  {
    return cy.contains('Senior QA Automation Engineer')
  }

  getSeniorFrontEndDeveloperModule()
  {
    return cy.contains('Senior Frontend Developer')
  }

  getPin1() {
    return cy.get('#1');
  }

  
  

}

export default careerPage;
