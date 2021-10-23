import {Navigation} from "../../page-objects/navigation";
import {Register} from "../../page-objects/register";
import {getRandomEmail} from "../../utils/getRandomEmail";

const email = getRandomEmail();


describe('Register new user', () => {
  it('UserRegisterTest', () => {
    Navigation.navigateSite();
    Register.registerNewUser(email)
  })
})
