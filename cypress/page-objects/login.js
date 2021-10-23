export class Login {

  static loginUser() {
    cy.get('title').contains('Betty Blocks')
      .get('[name="email_address"]').click()
      .get('[name="email_address"]').type(Cypress.env('user_login'))
      .get('[name="password"]').click()
      .get('[name="password"]').type(Cypress.env('user_password'))
      .get('button')
        .contains('Login')
        .click()
      cy.get('h6').contains('Login Flow')
  }
}
