import loginPage from "../pageObjects/login_page"


describe('Login Page', () => {

  beforeEach(() => {
    cy.visit('/login');
  });

  it('Verify login with invalid username', () => {
    loginPage.loginWithGivenCredentials("InvalidUsername")
  })

  it('Verify login with invalid password', () => {
    loginPage.loginWithGivenCredentials(undefined, "InvalidPassword!")
  })

  it('Verify login with invalid credentials', () => {
    loginPage.loginWithGivenCredentials("InvalidUsername", "InvalidPassword!")
  })

  it('Verify login with empty credentials', () => {
    cy.get('button').contains('Login').click()
  })

  it('Verify password masking', () => {
    cy.get('input#password').should('have.attr', 'type', 'password');
  })

  it('Verify successful login and "Logout" button functionality', () => {
    loginPage.loginWithGivenCredentials()
    cy.contains("Logout").click()
  })
})