import {getRandomEmail} from "../utils/getRandomEmail";

const email = getRandomEmail();

export class Register {

  static registerNewUser() {
    cy.get('a')
        .contains('Register new account')
        .click()
        .get('h3').contains('Create new account')
        .get('[name="first_name"]').click()
        .get('[name="first_name"]').type('testUserName')
        .get('[name="last_name"]').click()
        .get('[name="last_name"]').type('testUserLastname')
        .get('[name="email_address"]').click()
        .get('[name="email_address"]').type(email)
        .get('[name="password"]').click()
        .get('[name="password"]').type(Cypress.env('user_password'))
        .get('button')
        .contains('Create Account')
        .click()
        .get('*[class^="MuiAlert-message"]', { timeout: 10000 } )
        .should('be.visible')
        .contains('Your account has been created, you can now login here')
  }
}
