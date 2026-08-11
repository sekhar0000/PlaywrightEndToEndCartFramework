import { tr } from "@faker-js/faker";
import {expect, Locator, Page } from "@playwright/test";

export class Homepage {

    // Locators
    private readonly page: Page;
    private readonly lnkMyaccount: Locator;
    private readonly lnkRegister: Locator;
    private readonly lnkLogin: Locator;
    private readonly txtSearchbox: Locator;
    private readonly btnSearch: Locator;

    constructor(page: Page) {

        this.page = page;
        this.lnkMyaccount = page.locator('span:has-text("My Account")');
        this.lnkRegister = page.locator('a:has-text("Register")');
        this.lnkLogin = page.locator('a:has-text("Login")');
        this.txtSearchbox = page.locator(".form-control.input-lg");
        this.btnSearch = page.locator(".btn.btn-default.btn-lg");
    }

    // Action Methods

    // check if myHome page exist

    async isHomePageExist(){
        let title:string=await this.page.title();
        if (title){
            return true;
        }
        return false;
    }
    

    async clickMyAccount() {
        try {
            await this.lnkMyaccount.click();
        } catch (error) {
            console.error(`Exception occurred while clicking My Account: ${error}`);
            throw error;
        }
    }

    async clickRegister() {
        try {
            await this.lnkRegister.click();
        } catch (error) {
            console.error(`Exception occurred while clicking Register: ${error}`);
            throw error;
        }
    }

    async clickLogin() {
        try {
            await this.lnkLogin.click();
        } catch (error) {
            console.error(`Exception occurred while clicking Login: ${error}`);
            throw error;
        }
    }

    async enterSearchText(productName: string) {
        try {
            await this.txtSearchbox.fill(productName);
        } catch (error) {
            console.error(`Exception occurred while entering product name: ${error}`);
            throw error;
        }
    }

    async clickSearchButton() {
        try {
            await this.btnSearch.click();
        } catch (error) {
            console.error(`Exception occurred while clicking Search button: ${error}`);
            throw error;
        }
    }

    async searchProduct(productName: string) {
        try {
            await this.enterSearchText(productName);
            await this.clickSearchButton();
        } catch (error) {
            console.error(`Exception occurred while searching for "${productName}": ${error}`);
            throw error;
        }
    }

}