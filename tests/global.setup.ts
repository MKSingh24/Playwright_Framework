import {test as setup,expect} from "../src/fixtures/pageFixtures.js"


setup(" Authenticateuser",async ({page,loginPage})=>{

    await loginPage.gotoLogin();
    await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!)
    await expect(
    page.getByRole('heading', { name: 'My Account' }).first()
      ).toBeVisible();

    await page.context().storageState({path:'auth.user.json'})

    console.log(page.url())

})