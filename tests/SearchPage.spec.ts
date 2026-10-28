import {test,expect} from '../src/fixtures/pageFixtures.js'
import { CSVUtils } from '../src/utils/csvUtils.js';


test.beforeEach(async ({loginPage})=>{
    await loginPage.gotoLogin();
    await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!)
})

test("Verify Search Header functionality Test",async ({homePage,searchResultPage})=>{

        await homePage.doSearch('MacBook')
        let searchHeader:string=await searchResultPage.getSearchHeader();

        expect(searchHeader).toContain('MacBook')

})


test("Verify number of product count Test",async ({homePage,searchResultPage})=>{

        await homePage.doSearch('samsung')
        let productCount:number=await searchResultPage.getSearchResultcount()

        expect(productCount).toBeGreaterThan(0)

})

test("Verify Click product Functionalty Test",async ({homePage,searchResultPage,page})=>{

        await homePage.doSearch('MacBook')
        
        await searchResultPage.selectAndClickOnProduct("MacBook Air");

        expect(page).toHaveTitle('MacBook Air')

        

})

//********************using Csv ****************** */

let searchdata=CSVUtils.readCSV('src/testData/productSearch.csv')

for(let data of searchdata ){

    test(` Test Search Functionality with csv data ${data.searchKey},${data.productName}and ${data.count}`,async ({homePage,searchResultPage,page})=>{
            
         await homePage.doSearch(data.searchKey)
         let productCount:number=await searchResultPage.getSearchResultcount()

        expect(productCount).toBeGreaterThan(parseInt(data.count, 10))
        await searchResultPage.selectAndClickOnProduct(data.productName);

        expect(page).toHaveTitle(data.productName)
    })

}

