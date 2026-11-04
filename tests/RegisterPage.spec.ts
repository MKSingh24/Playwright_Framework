import {test,expect} from "../src/fixtures/pageFixtures.js"
import { generateUser } from '../src/utils/fakerUtils.js';




test.beforeEach(async ({loginPage})=>{
      
      await loginPage.gotoLogin();

})

test("Register new user", async ({registerPage})=>{
   
    const user=generateUser();

    await registerPage.registerUser(user);

    console.log(`user email is: ${user.email}`);

    console.log(`user name is: ${user.firstName}`)
    
})