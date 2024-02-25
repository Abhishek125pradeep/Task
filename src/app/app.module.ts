import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CharonlyDirective } from './charonly.directive';
import { ExtraCompoComponent } from './extra-compo/extra-compo.component';
import { EditdetailComponent } from './editdetail/editdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    CharonlyDirective,
    ExtraCompoComponent,
    EditdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
