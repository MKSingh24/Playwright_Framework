import {Page,Locator} from '@playwright/test'
import { BasePage } from './BasePage.js';


export class ProductInfoPage extends BasePage{

    private readonly productHeaders:Locator;
    private readonly productImgCount:Locator;
    private readonly productMetaData:Locator;
    private readonly productPrice:Locator;
    private readonly addTocart:Locator;
    private readonly successMsg:Locator;

    private map: Map<string, string>

    constructor(page:Page){
        super(page);
        this.productHeaders=page.locator("h1");
        this.productImgCount=page.locator("//div[@class='image magnific-popup']//img");
        this.productMetaData=page.locator("//div[@class='col-sm']//ul[@class='list-unstyled'][1]//li");
        this.productPrice=page.locator("//div[@class='col-sm']//ul[@class='list-unstyled'][2]//span");
        this.addTocart=page.locator('button#button-cart');
        this.successMsg=page.locator('div.alert.alert-success.alert-dismissible');
        this.map = new Map<string, string>();
    }

    async getProductHeader():Promise<string>{
        return await this.productHeaders.innerText();
    }

    async getProductImgCount():Promise<number>{
        await this.productImgCount.first().waitFor({state:'visible'});
        return await this.productImgCount.count();
    }

    async getProductMetaData():Promise<void>{
        await this.productMetaData.first().waitFor({state:'visible'});
        let metaInfo:string[]=await this.productMetaData.allInnerTexts();

        for(let data of metaInfo){
             let meta=data.split(":");
             let metaKey=meta[0].trim()
             let metaValue=meta[1].trim()

             this.map.set(metaKey,metaValue);
        }
    }

    async getProductPrice():Promise<Map<string,string>>{
        let priceInfo=await this.productPrice.innerText()

       return this.map.set("Product_Price",priceInfo);
    
    }

    async getCompleteProductDetails():Promise<Map<string,string>>{
        await this.getProductMetaData();
        await this.getProductPrice();
        return this.map;
    }

    async clickOnAddtoCartbutton():Promise<void>{
        await this.addTocart.click();
    }

     async getSuccessMessage():Promise<string>{
        return await this.successMsg.innerText()
    }
}