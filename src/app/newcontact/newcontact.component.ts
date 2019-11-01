import { Component, OnInit } from '@angular/core';
import { ContactService } from'../contact.service'
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { Categories } from '../categories';

@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.css']
})
export class NewcontactComponent implements OnInit {
  contact = {
    middleName: '',
    sirName: '',
    firstName: '',
    contact: '',
    category : ''
  };
  
  categories = new Categories().categories;
  constructor(public service : ContactService,private _route: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    return this.service.save(this.contact).subscribe(rs =>{
      this._route.navigate(['/showall']);
    });
  }

}
