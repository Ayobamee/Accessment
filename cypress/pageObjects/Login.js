class LoginPage
{
    

getEmail()

{

    return cy.get('#user_email')
}


getPassword()

{

    return cy.get('#user_password')
}

getLogin()
{
    return cy.get('#login-form > .btn')
}

get1waEnvironment()
{
    return cy.get('.css-p0aunb')
}


}

export default LoginPage;