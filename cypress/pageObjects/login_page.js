import basePage from "./base_page";

/**
 * Represents the Login Page and its interactions.
 * Extends the basePage to inherit common page functionalities.
 */
class loginPage extends basePage {  
    usernameFieldId = "username"; // ID for the username input field
    passwordFieldId = "password"; // ID for the password input field

    /**
     * Logs in with the given credentials.
     * Defaults to 'tomsmith' and 'SuperSecretPassword!' if no arguments are provided.
     * @param {string} [username='tomsmith'] - The username to log in with.
     * @param {string} [password='SuperSecretPassword!'] - The password to log in with.
     */
    loginWithGivenCredentials(username = 'tomsmith', password = 'SuperSecretPassword!') {
        // Type the username into the username field
        cy.get(`#${this.usernameFieldId}`).type(username);

        // Type the password into the password field
        cy.get(`#${this.passwordFieldId}`).type(password);

        // Click the Login button
        cy.get('button').contains('Login').click();
    }
}

// Export an instance of the loginPage class
export default new loginPage();