// test case :account registration 

//Tags : @master @sanity @regression

/* //steps: navigare to application url
go to My account and click register
fill all the steps using random data
agree to privacy
and submit
validate the confirmation message

*/
import { test, expect } from "allure-playwright"
import { Homepage } from "../pages/ninjaHomepage"
import { RegistrationPage } from "../pages/ninjaRegistrationPage"

import { RandomDataUtil } from "../utils/ninjarandomDataGenerator"
import { TestConfig } from "../test.config"

//hooks >>>using hooks we can mantion repeated task in hooks

let homepage: Homepage
let register: RegistrationPage;
let config: TestConfig
test.beforeEach(async ({ page }) => {

    const config = new TestConfig();
    await page.goto(config.appurl);
    homepage = new Homepage(page);
    register = new RegistrationPage(page);

})

test.afterEach(async ({ page }) => {
    await page.close();
})


//****************************************************** ADDING TAGS TO THE TEST************************************************* */
// test("User registration test @master @regression @sanity" , async  ({ }) => {
//// how to run groups >>>> npx playwright test ninjaLogin.spec.ts  --headed --grep="sanity"

test("User registration test @master @regression @sanity" , async  ({ }) => {

    // home page object

    homepage.clickMyAccount();
    homepage.clickRegister();

    await register.setFirstName(RandomDataUtil.getFirstName());
    await register.setLastName(RandomDataUtil.getlastName());
    await register.setEmail(RandomDataUtil.getEmail());

    await register.setTelephone(RandomDataUtil.getPhoneNumber())
    const password = RandomDataUtil.getPassword()

    await register.setPassword(password);

    await register.setConfirmPassword(password);
    await register.setPrivacyPolicy();
    await register.clickContinue();

    const confirmationMsg = await register.getConfirmationMsg()
    expect(confirmationMsg).toContain('Your Account Has Been Created!')

    //await page.waitForTimeout(2000)




})