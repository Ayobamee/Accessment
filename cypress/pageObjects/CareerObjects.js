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

  getApplyToBackEndRole()
  {
    return cy.get(':nth-child(2) > .w-inline-block > div')
  }

  getCandidateNameField()
  {
    return cy.get('#Name---Careers')
  }

  getCandidateEmailNameAddressField()

  {
    return cy.get('#Email---Careers')
  }

  getMessageField()
  {
    return cy.get('#Careers-Message')
  }


  getSendButton()
  {
    return cy.get('#wf-form-Careers-Form > .button')
  }
 

  randomChar(length) {
    var result           = "";
    var characters       = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  

  
  

}

export default careerPage;
