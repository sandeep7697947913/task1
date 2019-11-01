import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewcontactComponent } from './newcontact/newcontact.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { UpdatecontactComponent } from './updatecontact/updatecontact.component';

@NgModule({
  declarations: [
    AppComponent,
    NewcontactComponent,
    ContactlistComponent,
    UpdatecontactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
