import {Page,Locator} from '@playwright/test'
import { BasePage } from './BasePage.js';

export class LoginPage extends BasePage{

    private readonly emailId:Locator;
    private readonly password:Locator;
    private readonly loginBtn:Locator;
    private readonly forgotPwdLink:Locator;
    // private readonly logo:Locator; all ready define in basePage
    private readonly errorMessage:Locator

    constructor(page:Page){
        super(page)// calling Parent class(BasePage) constructor

        this.emailId=page.locator('#input-email');
        this.password=page.locator('#input-password');
        this.loginBtn=page.locator("//button[text()='Login']");
        this.forgotPwdLink=page.locator("(//a[text()='Forgotten Password'])[1]");
        // this.logo=page.locator("img");
        this.errorMessage=page.locator(".alert.alert-danger.alert-dismissible");
    }

    async gotoLogin(){
        await this.page.goto("en-gb?route=account/login");
    }
    async loginPagetitle():Promise<string>{
        return await this.page.title();
    }

    async isForgotPwdLinkAvliable():Promise<boolean>{
        return this.forgotPwdLink.isVisible();
    }

    async doLogin(username:string,password:string){
        await this.emailId.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();

        await this.page.waitForTimeout(2000);
    }

    async getPageErrormeg():Promise<string>{
        return await this.errorMessage.innerText()
    }

    
}