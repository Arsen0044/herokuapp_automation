import loginPage from "../pageObjects/login_page";

// Define a test suite for the Login Page
describe('Login Page', () => {

  // Hook to run before each test in the suite
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('/login');
  });

  // Test to verify login with an invalid username
  it('Verify login with invalid username', () => {
    // Use the loginPage object to perform login with invalid username
    loginPage.loginWithGivenCredentials("InvalidUsername");
    // Verify the popup message for invalid username
    loginPage.verifyPopupMessage("Your username is invalid!");
  });

  // Test to verify login with an invalid password
  it('Verify login with invalid password', () => {
    // Use the loginPage object to perform login with invalid password
    loginPage.loginWithGivenCredentials(undefined, "InvalidPassword!");
    // Verify the popup message for invalid password
    loginPage.verifyPopupMessage("Your password is invalid!");
  });

  // Test to verify login with both invalid username and password
  it('Verify login with invalid credentials', () => {
    // Use the loginPage object to perform login with invalid username and password
    loginPage.loginWithGivenCredentials("InvalidUsername", "InvalidPassword!");
    // Verify the popup message for invalid username (assuming the system prioritizes username errors)
    loginPage.verifyPopupMessage("Your username is invalid!");
  });

  // Test to verify login attempt with empty credentials
  it('Verify login with empty credentials', () => {
    // Click the login button without entering credentials
    cy.get('button').contains('Login').click();
    // Verify the popup message for invalid username
    loginPage.verifyPopupMessage("Your username is invalid!");
  });

  // Test to verify that the password field masks the password input
  it('Verify password masking', () => {
    // Check if the password input field has a type attribute of 'password'
    cy.get('input#password').should('have.attr', 'type', 'password');
  });

  // Test to verify successful login and the functionality of the "Logout" button
  it('Verify successful login and "Logout" button functionality', () => {
    // Use the loginPage object to perform login with valid credentials
    loginPage.loginWithGivenCredentials();
    // Verify the popup message for successful login
    loginPage.verifyPopupMessage("You logged into a secure area!");
    // Click the "Logout" button
    cy.contains("Logout").click();
    // Verify the popup message for successful logout
    loginPage.verifyPopupMessage("You logged out of the secure area!");
  });
  
});