/* 
navigate to the application url
navigate to the login page via homepage
enter valid cred  and login
verify successful login by checking  my account page 

*/


import test, { expect } from "@playwright/test";
import { TestConfig } from "../test.config";
import { Homepage } from "../pages/ninjaHomepage"
import { LoginPage } from "../pages/ninjaLogin"
import { MyAccountPage } from "../pages/ninjaMyaccount";


let config: TestConfig;
let homepage: Homepage;
let loginpage: LoginPage;
let myacc: MyAccountPage;

test.beforeEach(async ({ page }) => {
  config = new TestConfig();
  await page.goto(config.appurl)

  homepage = new Homepage(page)
  loginpage = new LoginPage(page)

  myacc = new MyAccountPage(page)
})

test.afterEach(async ({ page }) => {

  await page.close();

})

//*****************************************************ADDING TAGS TO THE TEST************************************************************ */
//@master @regression @sanity

// how to run groups >>>> npx playwright test ninjaLogin.spec.ts  --headed --grep="sanity"


test("User login test @master @regression @sanity", async ({ }) => {
  // navigate to login 

  await homepage.clickMyAccount();
  await homepage.clickLogin();
  // enter valid credent

  await loginpage.setEmail(config.email);
  await loginpage.setPassword(config.password)
  await loginpage.clickLogin();


  // alternatevely

  //await loginpage.login(config.email, config.password);

  // verify successful login page

   const isLoggedin=await myacc.isMyAccountPageExists();
    expect(isLoggedin).toBeTruthy(); 
})