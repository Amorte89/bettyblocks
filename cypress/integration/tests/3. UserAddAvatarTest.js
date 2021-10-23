import {Navigation} from "../../page-objects/navigation";
import {Login} from "../../page-objects/login";

const filepath = '/images/test.png'

describe('Cypress Test', () => {
  it('UserAddAvatarTest', () => {
    Navigation.navigateSite();
    Login.loginUser();
    cy.get('span').contains('My Account').click()
      .get('input[type="file"]').click({force:true})
        .attachFile(filepath)
      .get('*[class*="MuiTypography"]').contains('test.png')
      .get('span').contains('Save changes').click()
      .get('div').contains('Profile successfully updated')
  })
})
