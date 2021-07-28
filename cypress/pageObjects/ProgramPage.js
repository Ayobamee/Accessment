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


}

export default ProgramPage;