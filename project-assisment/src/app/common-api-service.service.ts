import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonApiServiceService {

  
  Apiurl = 'http://localhost:3000';
  recordById: any;
  id: any;

  constructor(private http: HttpClient) { }
  deleteApiCall(endPoint:any,id:any){
    let url=this.Apiurl+"/"+endPoint+"/"+id;
    return  this.http.delete(url);
   }
  getemployeedata(endPoint: any) {
   let url = this.Apiurl+'/'+endPoint;
  return this.http.get(url)
  }
  PostApicall(data: any, endPoint: any) {
    let url = this.Apiurl + '/' + endPoint;
    return this.http.post(url, data)

  }
  patchApicall(endPoint: any, id: any, formdata: any) {
 let url = this.Apiurl+'/'+endPoint+'/'+id;
 return this.http.patch(url,formdata)
  }
}
