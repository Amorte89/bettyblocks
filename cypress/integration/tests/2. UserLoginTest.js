import {Navigation} from "../../page-objects/navigation";
import {Login} from "../../page-objects/login";

describe('Login user', () => {
  it('UserLoginTest', () => {
    Navigation.navigateSite();
    Login.loginUser();
  })
})
