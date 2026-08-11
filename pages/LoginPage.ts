/* import { Page,Locator, } from "@playwright/test";

// page object model follows the encapsulation functionality , it will not display data and methods into one single class & variables
//  and methods are creating inside the class those are not accessed out side of the class, for that rreason we can keep private and readonly
// what ever we created action methods we can access out side of the class

 export class LoginPage{
    // define the variables private and read only 

    private readonly page:Page;
    private readonly loginLink:Locator;
    private readonly userNameInput:Locator;
    private readonly passwordInput:Locator;
    private readonly loginButton:Locator;

    // creating constructor
    constructor (page:Page){

        this.page=page;
        this.loginLink=this.page.getByRole("link",{name:'Log in'});
        this.userNameInput=this.page.locator("#loginusername");
        this.passwordInput=this.page.locator("#loginpassword");
        this.loginButton=this.page.getByRole("button",{name:'Log in'});
    }
    // action methods
   // every method returning promise so that 'y we can mention void promise
    async clickLoginLink():Promise<void>{
     await this.loginLink.click()
    }

    async enterUserName(username:string):Promise<void>{
        await this.userNameInput.clear();
        await this.userNameInput.fill(username);
    }

    async enterPassword(password:string):Promise<void>{
        await this.passwordInput.clear();
        await this.passwordInput.fill(password);
    }

    async clickLoginButton():Promise<void>{
        await this.loginButton.click();
    }

    // single method we cam call login operation

    async performLogin(username:string,password:string){
        await this.clickLoginLink();
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
} */

    import { Page, Locator } from "@playwright/test";

export class LoginPage {

    private readonly page: Page;
    private readonly txtEmail: Locator;
    private readonly txtPassword: Locator;
    private readonly btnLogin: Locator;

    constructor(page: Page) {
        this.page = page;

        this.txtEmail = page.locator("#input-email");
        this.txtPassword = page.locator("#input-password");
        this.btnLogin = page.locator("input[value='Login']");
    }

    async performLogin(email: string, password: string): Promise<void> {
        await this.txtEmail.fill(email);
        await this.txtPassword.fill(password);
        await this.btnLogin.click();
    }
}