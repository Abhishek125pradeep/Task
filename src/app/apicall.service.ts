import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
 
  recordById: any;
  id:any;
 Apiurl = "http://localhost:3000"
  Username: any;


  constructor(private http:HttpClient) { } 
  
  PostCall(Formdata:any,endpoint:any) {
    let Url = this.Apiurl + '/' + endpoint;
    return this.http.post(Url,Formdata)
  }

  patchApicall(endpoint:any,id:any,formdata:any){
    let url = this.Apiurl+"/"+id;
    return this.http.patch(url,formdata)
  }
  getApicall(endPoint:any) {
    let url =this.Apiurl+"/"+endPoint;
    return this.http.get(url)
  }

}
