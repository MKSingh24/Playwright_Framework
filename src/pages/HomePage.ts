import {Page,Locator} from '@playwright/test'
import { BasePage } from './BasePage.js';

export class HomePage extends BasePage{

    private readonly headers:Locator;
    private readonly logoutLink:Locator;
    // private readonly searchIcon:Locator;  define in basePage
    // private readonly searrchBar:Locator

    constructor(page:Page){
        super(page);

        this.headers=page.locator("h2");
        this.logoutLink=page.locator("(//a[text()='Logout'])[2]");
        // this.searchIcon=page.locator("//button[@type='submit' and @class='btn btn-light btn-lg']");
        // this.searrchBar=page.locator("//input[@name='search']")
    }

    async gotoHomepageTitle():Promise<string>{
        return await this.page.title()
    }

    async getHomePageHeaderList():Promise<string[]>{
        let headerList:string[]=await this.headers.allInnerTexts();
        return headerList;
    }

    async isLogoutLinkAvalible():Promise<boolean>{
        return await this.logoutLink.isVisible()
    }

    async doSearch(searchText:string):Promise<void>{
        await this.searrchBar.fill(searchText);
        console.log(`Search product is: ${searchText}`)
        await this.searchIcon.click()
    }



}