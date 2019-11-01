import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {
  title = 'task1';
  contacts: any;
  constructor(public service: ContactService) { }

  ngOnInit(){
    this.service.getAll().subscribe((res)=>{
      this.contacts = res;
    });
  }
}
