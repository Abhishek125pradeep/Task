import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from '../apicall.service';
import { MatDialog } from '@angular/material/dialog';
import { ExtraCompoComponent } from '../extra-compo/extra-compo.component';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent {
  ShowForm: boolean = true;
  registerationform!: FormGroup;
  alphabeticPattern = /^[a-zA-Z]+$/;
  Apires: any;
  Navbar!: FormGroup
  recordbyid: any;
  endPoint: any;
  id: any;
  UserDetails: any;
  registerationUserdetails:any = [];
 
  constructor(private rout: Router, private fb: FormBuilder, private apicallService: ApicallService,private dialogue : MatDialog) { }



  ngOnInit() {
this.fomrvalidators()
  }
  fomrvalidators(){
    this.Navbar = this.fb.group({
      
    })
  }
  search(Data:any){
    if(Data){
      let matchobj =Data.find((itom: any)=>{
        if(Data.Email == Data.Email ){
          return itom
        }
      })
      if(matchobj){
        this.apicallService.Username = Data.Email;
        this.rout.navigateByUrl('/Extracompo')
      }
    }
    else{
      this.rout.navigateByUrl('/Extracompo')
      alert("Email Id Not Found")
    }

  }

  Register() {
  this.dialogue.open(ExtraCompoComponent,{
    width:"63%",
    height: "700px",

    
  })
  

  }
  Edit(id:any){

  }
  async ShowregisterformDetail(){
  this.UserDetails = await this.apicallService.getApicall("posts").toPromise()
      
  this.getHoteldetailbyOwner()
      }
      getHoteldetailbyOwner(){
    
      }
       
  }
  
 
 
 
 
 