import { Component } from '@angular/core';
import { CommonApiServiceService } from '../common-api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companydata-component',
  templateUrl: './companydata-component.component.html',
  styleUrls: ['./companydata-component.component.scss']
})
export class CompanydataComponentComponent {
  searchvalue:any
  showtable: boolean = false;
  
  Loginform !: any[];
  employeedetails: any
  // Showrecrds: boolean;
  tableheading = ["First Name", 'Last Name', 'Email', 'Company','Phone', 'DOB', "Edit", "Delete"]
  
  constructor(private commonApiServiceService: CommonApiServiceService, private rout: Router) {

  }

  ngOnInit() {
    this.employeedata();
  
  }
  async employeedata() {
  
   
    this.employeedetails = await this.commonApiServiceService.getemployeedata('EmployeeData').toPromise()
    console.log(this.employeedetails.value);

    // this.getHotelByOwner()
  }
  getHotelByOwner() {
    // this.employeedetails.forEach((element: any) => {

    // });
    // if (this.Loginform.length > 0) {
    //   this.Showrecrds = true;
    // }

  }
  edit(id: any) {
    let recordByid: any = [];
    console.log('id', id);
    this.employeedetails.forEach((ele: any) => {
      if (ele.id == id) {
        recordByid.push(ele)
      }
    })

    console.log("recordbyid", recordByid);
    this.commonApiServiceService.recordById = recordByid;
    this.commonApiServiceService.id = id;
    this.rout.navigateByUrl("/Landingscreen")
  }
  delete(data: any) {
    console.log('id', data);
   
      this.commonApiServiceService.deleteApiCall('EmployeeData',data).subscribe(res =>{
       this.employeedata()
      })
  }
}
