import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-editdetail',
  templateUrl: './editdetail.component.html',
  styleUrls: ['./editdetail.component.scss']
})
export class EditdetailComponent {
  userData: any;
  constructor(private rout: Router, private Dialouge: MatDialog, private apicallservice: ApicallService) { }
  allUserData: any
  ngOnInit() {
    this.EditProfile()
  }

  async EditProfile() {
   this.userData= await this.apicallservice.getApicall("posts").toPromise()
     console.log(this.userData);
     
  }
  url = "assets/images/baby.jpg"
  onselectFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  }
}


