import {test as base} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage.js'
import { HomePage } from '../pages/HomePage.js';
import { SearchPage } from '../pages/SearchResultPage.js';
import {ProductInfoPage} from '../pages/ProductInfoPage.js'

//Define type

type PageFixtures={
    loginPage:LoginPage;
    homePage:HomePage;
    searchResultPage:SearchPage;
    productInfoPage:ProductInfoPage;
}


export let test=base.extend<PageFixtures>({

    loginPage:async ({page},use)=>{
        await use(new LoginPage(page));
        
    },

    homePage:async ({page},use)=>{
        await use(new HomePage(page));
    },

    searchResultPage:async ({page},use)=>{
        await use(new SearchPage(page))
    },

    productInfoPage:async ({page},use)=>{
        await use(new ProductInfoPage(page))
    }

})

export {expect} from '@playwright/test'