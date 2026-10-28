
import{test as base} from '@playwright/test'
import {APIHelper} from '../api/apiHelper.js'
import process from 'node:process';


//define type:

type apiFixture={
    apiHelper:APIHelper;
}

export let test=base.extend<apiFixture>({

    apiHelper:async ({request},use)=>{

        await use(new APIHelper(request,process.env.API_BASE_URL!))
    }

    

})

export {expect} from '@playwright/test'