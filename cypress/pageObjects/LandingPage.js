class LandingPage
{
    

getOnscreenSuccess()

{

    return  cy.get('.Toastify__toast')
}


getDashboard()

{

    return cy.get(':nth-child(1) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw')

}


getShipments()

{

    return cy.get(':nth-child(2) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw')
}



getPartners()

{

    return cy.get(':nth-child(3) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw')
}


getInventory()

{

    return cy.get(':nth-child(4) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw')
}


getSettings()
{
    return cy.get(':nth-child(4) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw')
}


getBookings()
{
    return cy.get(' :nth-child(4) > .sc-eNQAEJ > .sc-hMqMXs > a > .sc-kkGfuU')
}

getProfile()

{
    return cy.get('.sc-iujRgT')
}


getFufilment()
{
    return cy.get(':nth-child(5) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw')
}


getwareHousing()
{

    return cy.get('.sc-iAyFgw > .sc-iwsKbI')
}


getDriverss()
{
    return cy.get(':nth-child(2) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw')
}


getVehicles() 
{

    return cy.get(':nth-child(3) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw')
}

getAddDriver()
{

    return cy.get('.sc-bdVaJa')
}

getDriverName()
{
    return cy.get('[name="name"]')
}

getDriverPhoneNo()
{
    return cy.get('[name="telephone"]')
}

getDriverEmail() 
{
    return cy.get('[name="email"]')
}

getDriverLicense()
{
    return cy.get('[name="licenseNumber"]')

}

getSaveDriver() 
{
    return cy.get('.form > .sc-iwsKbI > .kCRkdH')
}


getSuccessfulAlertDriver()
{
    return cy.get('[style=""] > .Toastify__toast-body')

}

getCreateVehicle () {
    return cy.get('.sc-bdVaJa')
}

getAddVehicle () {
    return cy.get('[style="margin-bottom: 20px;"] > .sc-ifAKCX')
}


getVehicleRegNo () 
{
    return cy.get('[name="registrationNumber"]')
}


getVehicleType() 

{

    return cy.get('.styled-select').select('Bicycle')
    .should('have.value', 'bicycle')
    
}

getVehicleModel() 
{
    return cy.get('.exKwLu > .input')
}

getVehicleMake() 
{
    return cy.get('.kxogMg > .input')
}

getAddVehicleButton () 
{

    return cy.get('.hmNHGa > .kCRkdH')
}


getSuccessfulVehicle()
{
    return cy.get('[style=""] > .Toastify__toast-body')

}


getDrivers()
{
    return cy.get(':nth-child(3) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw')
}



getPricingSheets()
{
    return cy.get(':nth-child(5) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw')
}

getDeliveryZones()
{
    return cy.get(':nth-child(6) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw')
}

 keyGen(keyLength) {
    var i, key = "", characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    var charactersLength = characters.length;

    for (i = 0; i < keyLength; i++) {
        key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
    }

    return key;
}


randomChar(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


  random(len) {
    let result = Math.floor(Math.random() * Math.pow(10, len));
    return (result.toString().length < len) ? random(len) : result;
  }


  



}



export default LandingPage;