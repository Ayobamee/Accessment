I used Cypress.io as Tool of choice for this task because of it's suitability with Javascript and it's runner's ease for spying webelements.

The outcome of the test can be seen after the test is run using clm .This can be achieved by running the command 'npx cypress run' or 'npm test' (without the '').Once this commmand is run, the test will be executed in headless mode and the test results printed. If reviewer wants to see the visual execution of the test, simply open the cypressrunner manually by running the command 'npx cypress open'(without the ''), a cypress runner will open and user can navigate to the location of this project on their local and simply run the RegressionSuite.Spec.js file. The test will run in headful mode and the test results displayed.

I tested the following:
That a candidate can see open positions in SalesCamp.
That a candidate can apply for the Back end role.
That a candidate cannot apply for the Back end role advertised on the site if recaptcha is not ticked.(To ensure that negative tests were captured)
That a candidate cannot apply for the Back end role advertised on the site if the name field is blank.(To ensure that negative tests were captured)
That a candidate cannot apply for the Back end role advertised on the site if the email field is blank.(To ensure that negative tests were captured)
That a candidate cannot apply for the Back end role advertised on the site if application message body is blank.(To ensure that negative tests were captured)

With respect to page elements, please see below elements used:
"Career button" was captured so so that Cypress can interact with thiis to navigate to the Careers page. To see this ->cypress/pageObjects/HomeObjects.js

"View Roles Button" was captured so that Cypress can interact with this to view all the open roles available. To see this ->cypress/pageObjects/CareerObjects.js

"SeniorBackEndDeveloperModule" ,"SeniorQAAutomationEngineerModule" and "SeniorFrontEndDeveloperModule" were captured so that Cypress can assert that these elements appear .To see this ->cypress/pageObjects/CareerObjects.js

"ApplyToBackEndRole" button was captured so Cypress can interact with this for user attempting to apply for this role.To see this ->cypress/pageObjects/CareerObjects.js

"CandidateNameField" was captured so Cypress can interact with this for user attempting to fill their Name when appying for the Back end role.To see this ->cypress/pageObjects/CareerObjects.js.

"CandidateEmailNameAddressField" was captured so Cypress can interact with this for user attempting to fill their Email when appying for the Back end role.To see this ->cypress/pageObjects/CareerObjects.js.

"MessageField" was captured so Cypress can interact with this for user attempting to fill their message when appying for the Back end role.To see this ->cypress/pageObjects/CareerObjects.js.

A method was written to click the reCaptcha ,To see this visit --> cypress/support/CareerActions.js

"SendButton" was captured so Cypress can interact with this for user attempting to click the send button when appying for the Back end role.To see this ->cypress/pageObjects/CareerObjects.js.

Actions to open website url was captured here-->cypress/support/OpenBaseUrlActions.js

All actions to automated the other tests asides open the url is captured here --> cypress/support/CareerActions.js

The main implementation can be found here --> cypress/integration/RegressionSuite.Spec.js

Before the test can be run,Pull the project to your local, use any preferred IDE to open thr project, please ensure you have installed node, and set this as env variable on your local, then do 'npm install'(without the '') on clm, do 'npm install cypress'(without the '') on clm. Then refer to step 2 as stated in this README document to run the test.

Please Note, as part of the steps for “Applying for the Back end role”, a user is expected to click the “reCAPTCHA” button to specify that they are not a robot. This could not be achieved because i used an automated tool(cypress)/robot for this task and this can not mimick the human interaction to select those images, a work around is for a developer to disable this reCAPTCHA for testing purpose(preferably on a test enviroment) or for a dev to add some keys on the application to enable the reCAPTCHA know that this is a test, please read article on how this can be done --> https://developers.google.com/recaptcha/docs/faq#what-happens-to-recaptcha-v1
