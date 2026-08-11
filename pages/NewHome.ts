//import { th } from "@faker-js/faker";
import { Locator,Page } from "@playwright/test";

export class NewHome{

    private readonly page:Page;
    private readonly productList:Promise<Array<Locator>>;
   // private readonly productListLocator:string
    private readonly addToCartButton:Locator
    private readonly cartLink:Locator
 
    constructor (page:Page){
        // css selector  targeting  all product links under the product cards
        this.page=page;
         
        // this is the list of product locator
        this.productList= this.page.locator('div#tbodyid div.card h4.card-title a').all()  // it will list all the products reason y keep all()
        //this.productListLocator= 'div#tbodyid div.card h4.card-title a';

        // add to cart button exact matching using locator
      //  this.addToCartButton=this.page.locator('a:has-text("Add to cart")');
        this.addToCartButton=this.page.getByRole('link', { name: 'Add to cart' })
       
        // cart button in top menu

        this.cartLink=this.page.locator('a:has-text("Cart")');
    }

    // method to add a specific product to cart

    async addProductToCart(productname:string):Promise<void>
    {
        const productElements = this.productList
        //await this .page.locator(this.productListLocator).all();

        for(const  product of await productElements){
            const name = await product.textContent();
           if(name?.trim()===productname){
            await product.click();
            break
           }
        }
// handle alert while click on add to cart

 this.page.once('dialog',async dialog=>{ // page.once >> if you have to handle onle alert you can use page.once, other wise you can page.on
    if(dialog.message().includes('added')){
        await dialog.accept();
    }
 });
 await this.addToCartButton.click();
    }

    // method to navigate to cart

    async gotoCart(){
        await this.cartLink.click();
    }
}


