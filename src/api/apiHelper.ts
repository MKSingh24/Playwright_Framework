import { APIRequestContext } from "@playwright/test";


export class APIHelper{

    private readonly request:APIRequestContext;
    private readonly baseUrl:string;

    constructor(request:APIRequestContext,baseUrl:string){

        this.request=request;
        this.baseUrl=baseUrl; 
    }

    async getRequest(endPoint:string,requestheaders?:Record<string,string>){
        try{
        let response=await this.request.get(`${this.baseUrl}${endPoint}`,{headers:requestheaders})
        return{
            statusCode:response.status(),
            responseBody:await response.json()
        }
        }catch(error){
            console.error(`GET request failed for ${endPoint}:`, error);
            throw error;
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
