import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewcontactComponent } from './newcontact/newcontact.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { UpdatecontactComponent } from './updatecontact/updatecontact.component';


const routes: Routes = [
  {
    path : '',
    redirectTo : 'showall',
    pathMatch: 'full'
  },
  {
    path: 'showall',
    component : ContactlistComponent
  },
  {
    path: 'newcontact',
    component : NewcontactComponent,
  },
  {
    path : 'contact/:id',
    component : UpdatecontactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
