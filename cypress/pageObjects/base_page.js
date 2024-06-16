/**
 * Represents the base page with common functionalities that can be extended by other page classes.
 */
class basePage {
    /**
     * Verifies that a popup message is visible on the page.
     * @param {string} message - The message to verify.
     */
    verifyPopupMessage(message) {
        // Check if the element containing the message is visible
        cy.contains(message).should('be.visible');
    }
}

export default basePage;
