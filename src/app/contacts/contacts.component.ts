import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(public contactService: ContactsService) { }

  contactList: any;
  msgTrue = false;
  
  ngOnInit(): void {
    this.contactList = this.contactService.getContacts().subscribe(data => {
      this.contactList = data;
    })
  }
  addNewContact(form): void{
    //const newFormData = { id: 6, firstName: "Sruthi", lastName: "Koala"}
    console.log(form.value.firstName);
    console.log(form.value.lastName);
    let newFormData = {id: form.value.id, firstName: form.value.id, lastName: form.value.lastName }
    this.contactService.createContact(newFormData).subscribe(data => {
      this.msgTrue = true;
    })
  }
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
