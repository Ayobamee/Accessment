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

}

export default ProgramPage;