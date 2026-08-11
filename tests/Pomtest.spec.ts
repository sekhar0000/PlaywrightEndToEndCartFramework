import{test,expect}from "@playwright/test"

import { LoginPage } from "../pages/LoginPage"
import { NewHome } from "../pages/NewHome"         // .. is represnting current project dir
import { Cartpage } from "../pages/Cartpage"


test("User can login , add to product cart",async({page})=>{

    await page.goto("https://www.demoblaze.com/index.html");

   // creating object for page classes  to get the page class methods

   // login page
   // instead of 
    const loginpage  = new LoginPage(page)

   await loginpage.performLogin("rajjulakanti@gmail.com","Raja@1994");
    // above or below any can use
    /*
    instead of creating all we can create one method to access all
   loginpage.clickLoginLink();
   loginpage.enterUserName("rajjulakanti@gmail.com");
   loginpage.enterPassword("Raja@1994");
   loginpage.clickLoginButton() */

   // home page object
    const homepage =new NewHome(page);

   await homepage.addProductToCart("Samsung galaxy /*")
   await homepage.gotoCart();


  // cart page object
/* 
  const cartpage =new Cartpage(page)
 const isproductExist=  await cartpage.checkProductInCArt("Samsung galaxy s6");
expect(isproductExist).toBe(true) */

})