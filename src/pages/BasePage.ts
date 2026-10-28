import {Locator, Page} from '@playwright/test'

export class BasePage{

    protected readonly page:Page;

    //common locator across all page

    protected readonly logo:Locator;
    protected readonly searchIcon:Locator;
    protected readonly searrchBar:Locator
    protected readonly fotterLinks:Locator
    protected readonly currency:Locator
    protected readonly cartButton:Locator


    constructor(page:Page){
        this.page=page;
        this.logo=page.getByAltText('NLTECH Trainings Hub');
        this.searchIcon=page.locator("//button[@type='submit' and @class='btn btn-light btn-lg']");
        this.searrchBar=page.locator("//input[@name='search']");
        this.fotterLinks=page.locator(' footer a');
        this.currency=page.locator(' #form-currency');
        this.cartButton=page.locator('div#cart button');
    }

    async isLogoVisible():Promise<boolean>{
        return await this.logo.isVisible();
    }
     async isSearchBoxVisible():Promise<boolean>{
        return await this.searrchBar.isVisible();
    }

     async isCurrencyBoxVisible():Promise<boolean>{
        return await this.currency.isVisible();
    }

     async isCartButtonVisible():Promise<boolean>{
        return await this.cartButton.isVisible();
    }

     async getPageFootercount():Promise<number>{
        return await this.fotterLinks.count();
    }

    async getPageFooter():Promise<string[]>{
        return await this.fotterLinks.allInnerTexts()
    }

    async getCurrentUrl():Promise<string>{
    return this.page.url();
    }

    async waitForPageLoad(){

        await this.page.waitForLoadState();

    }
}