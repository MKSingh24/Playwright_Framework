import { APIRequestContext } from "@playwright/test";


export class APIHelper{

    private readonly request:APIRequestContext;
    private readonly baseUrl:string;

    constructor(request:APIRequestContext,baseUrl:string){

        this.request=request;
        this.baseUrl=baseUrl; 
    }

    async getRequest(endPoint:string,requestheaders?:Record<string,string>){

         const url = `${this.baseUrl}${endPoint}`;

         console.log("Base URL:", this.baseUrl);
         console.log("End Point:", endPoint);
         console.log("Final URL:", url);
        
        let response=await this.request.get(url,{headers:requestheaders})
        return{
            statusCode:response.status(),
            responseBody:await response.json()
       }
       
        
    }

     async postRequest(endPoint:string,bodyData:object,requestheaders?:Record<string,string>){
        let response=await this.request.post(`${this.baseUrl}${endPoint}`,{headers:requestheaders,data:bodyData})
        return{
            statusCode:response.status(),
            responseBody:await response.json()
        }
    }

    async putRequest(endPoint:string,bodyData:object,requestheaders?:Record<string,string>){
        let response=await this.request.put(`${this.baseUrl}${endPoint}`,{headers:requestheaders,data:bodyData})
        return{
            statusCode:response.status(),
            responseBody:await response.json()
        }
    }

    async deleteRequest(endPoint:string,requestheaders?:Record<string,string>){
        let response=await this.request.delete(`${this.baseUrl}${endPoint}`,{headers:requestheaders})
        return{
            statusCode:response.status(),
            statusText:response.statusText()
        }
    }
}
