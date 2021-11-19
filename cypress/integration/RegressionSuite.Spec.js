/// <reference types= "cypress" />


describe("Sales Champ Automation Challenge", function () {
 
  beforeEach(() => 
  //Open the SalesChamp url
  {cy.OpenProdEnv({});

   //Click Careers
   cy.clickCareers({})

    //click View Open Positions
    cy.viewHotRoles({})
}
  );


  it("Validate that a candidate can see open positions in SalesCamp ", 
  function () {   
      //Check to confirm the opens positions are visible
      cy.AssertOpenPositions({})

    });



    it("Validate that a candidate can apply for the Back end role ", 
    function () {
      //Check to confirm that user can apply for the Back end role.
      cy.ApplyToBackEndRole({})
      cy.clickRecaptcha({})
      cy.clickSendToCOmpleteApplication({})
  
    });


    it("Negative Test- Validate that a candidate cannot apply for the Back end role advertised on the site if recaptcha is not ticked ", 
    function () {
      //Check to confirm that with no recaptcha selected candidate cannot apply
      cy.ApplyToBackEndRoleWithoutClickingCaptcha({})
      cy.clickSendToCOmpleteApplication({})
  
    });



    it("Negative Test- Validate that a candidate cannot apply for the Back end role advertised on the site if the name field is blank ", 
    function () {
      //Check to confirm that user cannot apply for the role when the name field is blank.
      cy.ApplyToBackEndRolewithMissingCandidateName({})
      cy.clickRecaptcha({})
      cy.clickSendToCOmpleteApplication({})

    });


    it("Negative Test- Validate that a candidate cannot apply for the Back end role advertised on the site if the email field is blank ", 
    function () {
 
     //Check to confirm that user cannot apply for the role when the email field is blank.
      cy.ApplyToBackRoleEndwithMissingCandidateEmail({})
      cy.clickRecaptcha({})
      cy.clickSendToCOmpleteApplication({})
  
    });

    it("Negative Test- Validate that a candidate cannot apply for the Back end role advertised on the site if application message body is blank ", 
    function () {
      //Check to confirm that user cannot apply for the role when the message body is blank.
      cy.ApplyToBackRoleEndwithMissingMessage({})
      cy.clickRecaptcha({})
      cy.clickSendToCOmpleteApplication({})
  
    });


   



   });
