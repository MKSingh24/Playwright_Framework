
import{test,expect} from '@playwright/test'
import { request } from 'node:http';

let Auth_Token={'Authorization':'Bearer c76446b40b1f0ee256fde517a0ced6820532b274937d36b7ff2b8645ed7ccf96'};

//Get Single user

test("Get Single User", async ({request})=>{

    let response=await request.get('https://gorest.co.in/public/v2/users/8683827',{headers:Auth_Token});

   // console.log(response);
    let responseBody=await response.json();

    console.log(responseBody)
    console.log("response code is: "+response.status());
    console.log("response message is: "+response.statusText());
})

//Get All User
test("Get All User", async ({request})=>{

    let response=await request.get('https://gorest.co.in/public/v2/users',{headers:Auth_Token});

   // console.log(response);
    let responseBody=await response.json();

    console.log(responseBody)
    console.log("response code is: "+response.status());
    console.log("response message is: "+response.statusText());
})

//Create User

test("Create User", async ({request})=>{

    let userData={ "name": "Mk Singh", "email": `mk${Date.now()}@example.com`, "gender": "male", "status": "active" }

    let response=await request.post('https://gorest.co.in/public/v2/users',{headers:Auth_Token,data:userData});

   // console.log(response);
    let responseBody=await response.json();

    console.log(responseBody)
    console.log("response code is: "+response.status());
    console.log("response message is: "+response.statusText());
})

//Update User
test("update User", async ({request})=>{

    let userData={ "name": "Mohan Singh", "email": `mk1792813592965@example.com`, "gender": "male", "status": "Inactive" }

    let response=await request.put('https://gorest.co.in/public/v2/users/8684161',{headers:Auth_Token,data:userData});

   // console.log(response);
    let responseBody=await response.json();

    console.log(responseBody)
    console.log("response code is: "+response.status());
    console.log("response message is: "+response.statusText());
})

//Partial upadte user

test("Partial update User User", async ({request})=>{

    let userData={ "name": "radha Singh"};

    let response=await request.patch('https://gorest.co.in/public/v2/users/8684161',{headers:Auth_Token,data:userData});

   // console.log(response);
    let responseBody=await response.json();

    console.log(responseBody)
    console.log("response code is: "+response.status());
    console.log("response message is: "+response.statusText());
})

//Delete user

test("Delete Single User", async ({request})=>{

    let response=await request.delete('https://gorest.co.in/public/v2/users/8683827',{headers:Auth_Token});

   console.log(response);
  
    console.log("response code is: "+response.status());
    console.log("response message is: "+response.statusText());
})
