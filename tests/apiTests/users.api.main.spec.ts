
import {test,expect} from "../../src/fixtures/apiFixtures.js"

const TOKEN=process.env.API_TOKEN;

let Auth_Token={'Authorization':`Bearer ${TOKEN}`};

test('Get All Uaer API Test', async ({apiHelper})=>{

    let response=await apiHelper.getRequest('/public/v2/users',Auth_Token);
    
    console.log('Response Body is:', JSON.stringify(response.responseBody, null, 2));
    console.log(response.statusCode)
    expect(response.statusCode).toBe(200);
    expect(response.responseBody.length).toBeGreaterThan(5);

})

//create user
let userData={ "name": "Mk Singh", "email": `mk${Date.now()}@example.com`, "gender": "male", "status": "active" }

test("create new user", async ({apiHelper})=>{
    let response=await apiHelper.postRequest('/public/v2/users',userData,Auth_Token);
    console.log('Response Body is:', JSON.stringify(response.responseBody, null, 2));
    console.log(response.statusCode)
    expect(response.statusCode).toBe(201);
})

let user_id=8685208;
let userData1={ "name": "Radha Singh", "email": `mk1792898640087@example.com`, "gender": "female", "status": "active" }

test("Update user Details", async ({apiHelper})=>{
    let response=await apiHelper.putRequest(`/public/v2/users/${user_id}`,userData1,Auth_Token);
    console.log('Response Body is:', JSON.stringify(response.responseBody, null, 2));
    console.log(response.statusCode)
    expect(response.statusCode).toBe(200);
})