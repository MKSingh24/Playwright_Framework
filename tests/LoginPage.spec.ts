// import {test,expect} from '@playwright/test'

// import {LoginPage} from '../src/pages/LoginPage.js'
// import { HomePage } from 'src/pages/HomePage.js';
//now we imort test from fixtures

//  import { LoginPage } from "src/pages/LoginPage.js";
import {test,expect} from "../src/fixtures/pageFixtures.js"
import { CSVUtils } from '../src/utils/csvUtils.js';
import { ExcelUtils } from '../src/utils/excelUtils.js';
import {JSONUtils} from '../src/utils/jsonUtils.js'
 

// let loginPage:LoginPage; no need
// let homePage:HomePage;
// test.beforeEach(async ({page})=>{
//       loginPage=new LoginPage(page);
//       homePage=new HomePage(page)
//       await loginPage.gotoLogin();

// })
//using custome fixture

test.beforeEach(async ({loginPage})=>{
      
      await loginPage.gotoLogin();

})

test("Login Page Title test",async ({loginPage})=>{

    // let loginPage=new LoginPage(page);
    // await loginPage.gotoLogin();
    let title=await loginPage.loginPagetitle();

    expect(title).toBe('Account Login')
})

test("forgot password link  Exist test",async ({loginPage})=>{

    // let loginPage=new LoginPage(page);
    // await loginPage.gotoLogin();
    let isForgotpwdLinkavalible=await loginPage.isForgotPwdLinkAvliable()

    expect(isForgotpwdLinkavalible).toBe(true)
})

test("Login Test",async ({loginPage,homePage})=>{

  await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!)

  //Assertion
  let flag:boolean=await homePage.isLogoutLinkAvalible();
  expect(flag).toBeTruthy()
})

// ****************Read Data From CSV for negative testing ******************

let logindata=CSVUtils.readCSV('src/testData/loginData.csv')

for(let data of logindata){

  test(`Negative login test with :${data.username} and ${data.password}`,async ({loginPage})=>{
    await loginPage.doLogin(data.username,data.password)
    let errorMsg=await loginPage.getPageErrormeg()
    expect(errorMsg).toContain('Warning: No match for E-Mail Address and/or Password.')
  })
}

// ****************Read Data From Excell for negative testing ******************

let exceldata=ExcelUtils.readExcel('src/testData/excelData.xlsx')

for(let data of exceldata){

  test(`Negative login  with Excell data :${data.username} and ${data.password}`,async ({loginPage})=>{
    await loginPage.doLogin(data.username,data.password)
    let errorMsg=await loginPage.getPageErrormeg()
    expect(errorMsg).toContain('Warning: No match for E-Mail Address and/or Password.')
  })
}

// ****************Read Data From Json for negative testing ******************

let jsondata=JSONUtils.readJSON('src/testData/jsondata.json')

for(let data of jsondata){

  test(`Negative login  with json data :${data.username} and ${data.password}`,async ({loginPage})=>{
    await loginPage.doLogin(data.username,data.password)
    let errorMsg=await loginPage.getPageErrormeg()
    expect(errorMsg).toContain('Warning: No match for E-Mail Address and/or Password.')
  })
}




