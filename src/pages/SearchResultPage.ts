
import {Page,Locator} from '@playwright/test'
import { BasePage } from './BasePage.js';

export class SearchPage extends BasePage{

    private readonly resultHeaders:Locator;
    private readonly searchResult:Locator;

    constructor(page:Page){
        super(page);
        this.resultHeaders=page.locator('h1');
        this.searchResult=page.locator('div.product-thumb')
    }

    async getSearchHeader():Promise<string>{
        return await this.resultHeaders.innerText()
    }

    async getSearchResultcount():Promise<number>{
        return await this.searchResult.count()
    }


    async selectAndClickOnProduct(productName:string){
        // let productLocator=this.page.locator(`(//a[text()='${productName}'])[2]`)
        let productLocator=this.page.getByRole('link',{name:`${productName}`}).last()
        console.log(`clicking Product With name :${productName}`)
        await productLocator.click()
    }
}