import {test,expect} from '../src/fixtures/pageFixtures.js'

test.beforeEach(async ({loginPage})=>{
    await loginPage.gotoLogin();
    await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!)
})

test("verify product Image count", async ({homePage,searchResultPage,productInfoPage})=>{

    await homePage.doSearch("macbook");
    await searchResultPage.selectAndClickOnProduct("MacBook Pro");
    let productImgCount=await productInfoPage.getProductImgCount();

    expect(productImgCount).toBeGreaterThan(1);


})

test("verify product Information Test", async ({homePage,searchResultPage,productInfoPage})=>{

    await homePage.doSearch("macbook");
    await searchResultPage.selectAndClickOnProduct("MacBook Pro");

    let completeInfo=await productInfoPage.getCompleteProductDetails();

    console.log(completeInfo);

    expect.soft(completeInfo.get("Brand")).toBe('Apple')
    expect.soft(completeInfo.get('Product Code')).toBe('Product 18');
    expect.soft(completeInfo.get('Product_Price')).toBe('$2,000')

})

test("Verify Add To cart functionality and success msg",async ({homePage,searchResultPage,productInfoPage})=>{
    let productName="MacBook Pro"
    await homePage.doSearch("macbook");
    await searchResultPage.selectAndClickOnProduct(productName);
    await productInfoPage.clickOnAddtoCartbutton();
    let successMsg=await productInfoPage.getSuccessMessage();

    expect(successMsg).toContain(` Success: You have added ${productName} to your shopping cart!`)

})

//common functionality check

test("verify Page Logo", async ({productInfoPage})=>{

    let isVissible=await productInfoPage.isLogoVisible();
    expect(isVissible).toBe(true);
   
})

test("verify common footer count", async ({productInfoPage})=>{

    let footerCount=await productInfoPage.getPageFootercount();
    expect(footerCount).toBe(15);
   
})