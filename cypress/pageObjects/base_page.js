class basePage {

    usernameFieldId = "username";
    passwordFieldId = "password";

    loginWithGivenCredentials(username = 'tomsmith', password = 'SuperSecretPassword!'){
        cy.getById(`${this.usernameFieldId}`).type(`${username}`)
        cy.getById(`${this.passwordFieldId}`).type(`${password}`)
        cy.get('button').contains('Login').click()
    }

}


export default basePage;
