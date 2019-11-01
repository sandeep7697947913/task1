import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { Categories } from '../categories';

@Component({
  selector: 'app-updatecontact',
  templateUrl: './updatecontact.component.html',
  styleUrls: ['./updatecontact.component.css']
})
export class UpdatecontactComponent implements OnInit {
  contact: {};
  categories = new Categories().categories;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private service : ContactService
  ) { 
    
  }


  ngOnInit() {
    this.service.getContact(this.route.snapshot.paramMap.get('id')).subscribe(res=>{
      this.contact = res;
    })
  }

  onSubmit(){
    this.service.updateContact(this.contact).subscribe(res=>{
      this.router.navigate(['/showall'])
    })
  }

  delete(){
    this.service.deleteContact(this.contact._id).subscribe(res=>{
      this.router.navigate(['/showall'])
    })
  }

}
