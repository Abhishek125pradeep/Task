import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiServiceService } from '../common-api-service.service';

@Component({
  selector: 'app-landingscreen',
  templateUrl: './landingscreen.component.html',
  styleUrls: ['./landingscreen.component.scss']
})
export class LandingscreenComponent {
  Loginform!: FormGroup;
  OwnerApi: any;
  id: any;
  recordbyid: any;
  endPoint = "HotelDetails"
  response: any;
  isGenderSelected = true;
  Male = "Male";
  FeMale = "female";
  other = "other";
  addUser:boolean=true;
  PasswordMatch: any;
  ConfirmPaasword: any;
  iSMatch: boolean = false;
  recordebyid: any;
  constructor(private route: Router, private fb: FormBuilder, private commonApiServiceService: CommonApiServiceService) { }
  ngOnInit() {
  
    this.id = this.commonApiServiceService.id;
    this.recordebyid = this.commonApiServiceService.recordById;
    console.log('recorbyid111',this.recordebyid);
    
    this.registrationformControl()
  }
  registrationformControl() {
    this.Loginform = this.fb.group({
      Name: [this.recordebyid ? this.recordebyid[0]?.Name : '', [Validators.pattern("[A-Za-z]*$"), Validators.maxLength(15), Validators.minLength(2),Validators.required ]],
      LastName: [this.recordebyid ? this.recordebyid[0]?.LastName : '', [Validators.pattern("[a-zA-z]*$"),Validators.maxLength(15), Validators.minLength(2),Validators.required]],
      Email: [this.recordebyid ? this.recordebyid[0]?.Email : '', [Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      Mobile: [this.recordebyid ? this.recordebyid[0]?.Mobile : '',[Validators.required,Validators.pattern("[0-9]*$"),Validators.maxLength(10)]],
      Company: [this.recordebyid ? this.recordebyid[0]?.Company : '', [Validators.required,]],
      Gender: ['',[]],
      DOB: ['',],
      Password:['',Validators.required],
      ConfirmPassword:['',Validators.required]
     
    })
  }

  Submit() {
    console.log(this.Loginform.value);
    
    let endpoint = 'EmployeeData'

   this.commonApiServiceService.PostApicall(this.Loginform.value, endpoint).subscribe(res => {
      this.response = res
     })

  
    // this.commonApiServiceService.PostApicall(data, Ownerendpoint).subscribe(Ownerresponser => {
    //  this.OwnerApi = Ownerresponser;
   }
   gender(data:any){

   
     }
     admin(){
      this.addUser = !this.addUser
     }


     Update() {
      let endpoint = 'EmployeeData'
      this.commonApiServiceService.patchApicall(endpoint,this.id,this.Loginform.value).subscribe(res=>{
        
      })
      alert("Data Updated Successfully")
   this.route.navigateByUrl('/companydata')
}
Password() {
  console.log("Passwordvalue", this.Loginform.value.Password);
  this.PasswordMatch = this.Loginform.value.Password;
  this.ConfirmPaasword = this.Loginform.value.ConfirmPassword;
  console.log('passwordmatch',this.PasswordMatch);
  console.log('confmpasswordmatch',this.ConfirmPaasword);
  
  if (this.PasswordMatch == this.ConfirmPaasword) {
    this.iSMatch = false;
  }
  else {
    this.iSMatch = true;
  }
}
}
