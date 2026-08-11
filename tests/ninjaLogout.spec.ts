import { MyAccountPage } from "../pages/ninjaMyaccount";
import { LogoutPage } from "../pages/ninjaLogout";
import { HomePage } from "../../Users/aparna/Downloads/Project+files (1)/Project files/pages/HomePage";
import { TestConfig } from "../test.config";
import { LoginPage } from "../pages/ninjaLogin";
import{test,expect}from "@playwright/test"


let config : TestConfig;
let homepage:HomePage;
let loginpage: LoginPage;
let myaccountpage: MyAccountPage;
let logout: LogoutPage;


// set up before each step

test.beforeEach(async({page})=>{

    config=new TestConfig();
    await page.goto(config.appurl);

    homepage =new HomePage(page);
    loginpage =new LoginPage(page)
    myaccountpage =new MyAccountPage(page);
    logout=new LogoutPage(page)
})

test.afterEach(async({page})=>{
    await page.close();
})

test("user logout   test @master @regression",async({})=>{
    await homepage.clickMyAccount();
    await homepage.clickLogin();

    await loginpage .login(config.email,config.password);

    expect(await myaccountpage.isMyAccountPageExists()).toBeTruthy();
})