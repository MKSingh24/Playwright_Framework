
import {test,expect} from "../../src/fixtures/apiFixtures.js"

const TOKEN=process.env.API_TOKEN;
let userId:number;

let Auth_Token={'Authorization':`Bearer ${TOKEN}`};

test.describe.serial("End to End Users API Test Cases", ()=>
{

test('Get All Uaer API Test', async ({apiHelper})=>{

    let response=await apiHelper.getRequest('/public/v2/users',Auth_Token);

    console.log(response.responseBody);
    console.log(response.statusCode)
    expect(response.statusCode).toBe(200);
    expect(response.responseBody.length).toBeGreaterThan(5);

})

//create user
let userData={ "name": "Mk Singh", "email": `mk${Date.now()}@example.com`, "gender": "male", "status": "active" }

test("create new user", async ({apiHelper})=>{
    let response=await apiHelper.postRequest('/public/v2/users',userData,Auth_Token);
    console.log(response.responseBody);
    console.log(response.statusCode)
    expect(response.statusCode).toBe(201);
     expect(response.responseBody.name).toBe(userData.name);

    userId=response.responseBody.id;
    console.log("User Id is : "+userId);
})

//update user


test("Update user Details", async ({apiHelper})=>{
    let userData={ "name": "mohan Singh", "email": `mk${Date.now()}@example.com`, "gender": "female", "status": "active" }

    let response=await apiHelper.putRequest(`/public/v2/users/${userId}`,userData,Auth_Token);
    console.log(response.responseBody);
    console.log(response.statusCode)
    
    expect(response.statusCode).toBe(200);
    expect(response.responseBody.name).toBe(userData.name);
    expect(response.responseBody.status).toBe(userData.status);
})

test("Delete the Created User", async({apiHelper})=>
{
    let response=await apiHelper.deleteRequest(`/public/v2/users/${userId}`,Auth_Token);                

    expect(response.statusCode).toBe(204);
    expect(response.statusText).toBe("No Content");
})

})