import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
url="https://localhost:7091/api/CustomerAPI";
  constructor(private httpclient:HttpClient) { }
  
displaycustomer()
{
  return this.httpclient.get(this.url);
}

deletecustomer(CustomerId:any)
{
  return this.httpclient.delete(this.url+"/"+CustomerId);
}

getrecordonID(CustomerId:any)
{
  return this.httpclient.get(this.url+"/getrecord?CustomerId="+CustomerId);
}

updatecustomer(c:any)
{
    const headers = { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': '',
  };
return this.httpclient.put(this.url,c,{headers});
}
Addcustomer(cus:any)
{
  const headers = { 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    'Authorization': '',
};
  return this.httpclient.post(this.url+"/register",cus,{headers});
}
viewcustomerServicebyId(CustomerId:number)
   {
    return this.httpclient.get(this.url+"/getrecord?CustomerId="+CustomerId);
   }

}
