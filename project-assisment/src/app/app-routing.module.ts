import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingscreenComponent } from './landingscreen/landingscreen.component';
import { CompanydataComponentComponent } from './companydata-component/companydata-component.component';

const routes: Routes = [
  {path: "Landingscreen",component:LandingscreenComponent},
  {path: "",component:LandingscreenComponent},
  {path: "companydata",component:CompanydataComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
