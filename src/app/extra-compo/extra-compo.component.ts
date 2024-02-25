import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from '../apicall.service';
import { MatDialog } from '@angular/material/dialog';
import { EditdetailComponent } from '../editdetail/editdetail.component';


@Component({
  selector: 'app-extra-compo',
  templateUrl: './extra-compo.component.html',
  styleUrls: ['./extra-compo.component.scss']
})
export class ExtraCompoComponent {
 
  registerationform!: FormGroup;
  alphabeticPattern = /^[a-zA-Z]+$/;
  recordbyid: any;
  Apires: any;
  endPoint: any;
  id: any;
  UserDetails: any;
  // Navbar!: FormGroup;
  constructor(private rout: Router, private fb: FormBuilder, private apicallService: ApicallService,private Dialouge: MatDialog) { }
  ngOnInit() {
    this.recordbyid = this.apicallService.recordById;
    console.log(this.recordbyid);
    
    this.formvalidationcontrol()
  }

    
    
  

  formvalidationcontrol() {
    // this.Navbar = this.fb.group({})
    this.registerationform = this.fb.group({
      Name: [this.recordbyid ? this.recordbyid[0].Name : '', [Validators.pattern(this.alphabeticPattern), Validators.maxLength(20), Validators.required]],
      LastName: [this.recordbyid ? this.recordbyid[0].LastNameName : '', [Validators.pattern(this.alphabeticPattern), Validators.maxLength(20), Validators.required]],
      Email: [this.recordbyid ? this.recordbyid[0].Email: '', [Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/), Validators.required]],
      MobNo: [this.recordbyid ? this.recordbyid[0].MobNo : '', [Validators.pattern('[0-9]*$'), Validators.maxLength(10), Validators.required]],
      State: [this.recordbyid ? this.recordbyid[0].State : '', [Validators.pattern('[a-zA-Z]*$'), Validators.required]],
      Contry: [this.recordbyid ? this.recordbyid[0].Contry : '', [Validators.required]],
      Address: [this.recordbyid ? this.recordbyid[0].Address : '', [Validators.required]]
    })
  }

  Submit(Data: any) {
    console.log(Data);
    let endpoint = "posts"
    this.apicallService.PostCall(Data, endpoint).subscribe(response => {
      this.Apires = response;
    })
   this.Dialouge.open(EditdetailComponent,{
    height:"800px",
    width:"750px",
   
   })
  }
  Cancel(){
    this.rout.navigateByUrl('/registration')
  }
  async showUsertail(){
  this.UserDetails = await this.apicallService.getApicall('posts').toPromise();
  console.log(this.UserDetails);
  
  }
  
}