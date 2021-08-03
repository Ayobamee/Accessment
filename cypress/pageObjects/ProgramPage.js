class ProgramPage
{
    

getPrograms()

{

    return cy.contains('PROGRAMS')
}

getTestPrograms()
{
    return  cy.get("#MENU_PROGRAMS")
}

getAddToCart()
{
    return cy.get('#ADD_TO_CART_LABEL-2987')
}

getRemoveFromCart()
{
    return cy.get('#REMOVE_FROM_CART-0')
}

getCart()
{
    return cy.get('#MENU_CART_STATUS > .fas')
}

getNext()
{
    return cy.get('#CART_NEXT')
}

getOrgName()
{
    return cy.get('#orgName')
}

getCountry()
{
    return cy.get('#country')
}

getContactName()
{
    return cy.get('#contactName')
}

getEmail()
{
    return cy.get('#email')
}

getWebsite()
{
    return cy.get('#website')
}

getPhone()
{
    return cy.get('#phone')
}

getWhatsapp()
{
    return cy.get('#whatsapp')
}

getSend()
{
    return cy.get('#CART_SEND')
}

getOrderNotication()
{
    return cy.get('#ORDER_CONFIRMATION')
}

}

export default ProgramPage;