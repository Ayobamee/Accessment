class CareerPage {

  getCareersButton()
  {
    return cy.get('.careers-link')
  }
  

  getViewHotRolesButton()
  {
    return cy.get('.careers-button')
  }

}

export default CareerPage;
