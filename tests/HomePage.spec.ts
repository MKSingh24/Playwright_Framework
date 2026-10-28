// import {test,expect} from '@playwright/test'

// import {HomePage} from '../src/pages/HomePage.js'
// import { LoginPage } from 'src/pages/LoginPage.js'

import {test,expect} from '../src/fixtures/pageFixtures.js'

// let loginPage:LoginPage;
// let homePage:HomePage;

test.beforeEach(async ({page,loginPage})=>{
    // loginPage=new LoginPage(page);
    // homePage=new HomePage(page)
    
    await loginPage.gotoLogin();
    await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!)
   
    // we can use storage state to go to home page(without login)
    // await page.goto(process.env.BASE_URL!)
    
})

test("Home Page Title test", async ({homePage})=>{
    let homePageTitle=await homePage.gotoHomepageTitle();
    expect(homePageTitle).toBe("My Account");
})

test("Home Page logout Link test", async ({homePage})=>{
    let isLogoutLink=await homePage.isLogoutLinkAvalible()
    expect(isLogoutLink).toBe(true);
})

test("Home Page AllHeader list test", async ({homePage})=>{
    let headers=await homePage.getHomePageHeaderList()
    expect(headers).toHaveLength(3);
    expect.soft(headers).toEqual(["My Orders","My Affiliate Account","Newsletter"])
})