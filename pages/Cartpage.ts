// you need verify the product is added to cart

import { Page,Locator } from "@playwright/test";
 

export class Cartpage{

    private page:Page;
    private  productNameInCartSelector:Promise<Array<Locator>>;

    constructor (page:Page){
        this.page=page;

        // css selector to select all product name cells in the cart table after adding

        this.productNameInCartSelector=this.page.locator("#tbodyid tr  td:nth-child(2)" ).all()   
    }
    // method to check if a specific product is present in the cart

    async checkProductInCArt(productName:string):Promise<boolean>{
        const products = await this.productNameInCartSelector

        for(const  product of  products){
            const name :any=(await product.textContent())?.trim();
            console.log(name)
            if(name===productName){
                return true;
            }
        }
        return false;
    }
}