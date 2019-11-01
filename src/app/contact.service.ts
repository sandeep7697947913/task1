import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient,) {

   }
  url = 'http://localhost:7000/api/';

  getAll(){
    return this.http.get(this.url + 'contact');
  }

  save(contact){
    return this.http.post(this.url + 'contact', contact);
  }

  getContact(id){
    return this.http.get(this.url+'contact/' + id)
  }

  updateContact(contact){
    return this.http.put(this.url+'contact',contact)
  }

  deleteContact(id){
    return this.http.delete(this.url+'contact/'+id)
  }
}
