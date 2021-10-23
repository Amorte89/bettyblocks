export class Navigation {

  static navigateSite() {
    cy.visit(Cypress.env('user_url'), { timeout: 50000 })
  }
}
